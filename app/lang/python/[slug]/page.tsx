import Image from 'next/image'
import { Metadata } from 'next'
import { OstDocument } from 'outstatic'
import markdownToHtml from '@/utils/mdToHtml'
import { absoluteUrl } from '@/utils/absoluteUrl'
import { getDocumentSlugs, load } from 'outstatic/server'
import DateFormatter from '@/components/DateFormatter'
import { notFound } from 'next/navigation'

type Post = {
  tags: { value: string; label: string }[]
} & OstDocument

interface Params {
  params: {
    slug: string
  }
}

export async function generateMetadata(params: Params): Promise<Metadata> {
  const post = await getData(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      url: absoluteUrl(`/lang/python/${post.slug}`),
      images: [
        {
          url: absoluteUrl(post?.coverImage || '/lang-logos/python.webp'),
          width: 1200,
          height: 630,
          alt: post.title
        }
      ]
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: absoluteUrl(post?.coverImage || '/lang-logos/python.webp')
    }
  }
}

export default async function Post(params: Params) {
  const post = await getData(params)
  return (
      <div className="max-w-6xl mx-auto px-5">
        <article className="mb-32">
          <div className="relative flex justify-center items-center mb-2 md:mb-4 sm:mx-0 w-full h-32 md:h-96">
            <Image
              alt={post.title}
              src={post?.coverImage || '/lang-logos/python.webp'}
              // fill
              width={200}
              height={200}
              className="object-cover"
              priority
            />
          </div>
          {Array.isArray(post?.tags)
            ? post.tags.map(({ label }) => (
                <span
                  key="label"
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {label}
                </span>
              ))
            : null}
          <h1 className="font-primary text-2xl font-bold md:text-4xl mb-2">
            {post.title}
          </h1>
          <div className="hidden md:block md:mb-12 text-slate-600">
            Written on <DateFormatter dateString={post.publishedAt} /> by{' '}
            {post?.author?.name || ''}.
          </div>
          <hr className="border-neutral-200 mt-10 mb-10" />
          <div className="max-w-2xl mx-auto">
            <div
              className="prose lg:prose-xl"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>
        </article>
      </div>
  )
}

async function getData({ params }: Params) {
  const db = await load()

  const post = await db
    .find<Post>({ collection: 'python', slug: params.slug }, [
      'title',
      'publishedAt',
      'description',
      'slug',
      'author',
      'content',
      'coverImage',
      'tags'
    ])
    .first()

  if (!post) {
    notFound()
  }

  const content = await markdownToHtml(post.content)

  return {
    ...post,
    content
  }
}

export async function generateStaticParams() {
  const posts = getDocumentSlugs('python')
  return posts.map((slug) => ({ slug }))
}