import { SparklesPreview } from "@/components/Spaek";
import { TextGenerateEffectDemo } from "@/components/Moto";
import { GeminiEffect } from "@/components/ui/GeminiEffect";
import { LangCard } from "@/components/ui/Card";
import { NewsLatter } from "@/components/ui/Newslatter";

export default function Home() {
  return (
    <main className="mt-2 pt-2">
      <SparklesPreview />
      <TextGenerateEffectDemo />
      <GeminiEffect />
      <div className="mt-10">
        <LangCard />
      </div>
      <NewsLatter />
    </main>
  );
}
