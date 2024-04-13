"use client"
import React from "react"
import {useRef} from "react"
import { useInView, motion } from "framer-motion"

function Section({children}: {children: any}) {
    const ref = useRef(null)
    const isInView = useInView(ref, {once: false})
    return (
        <section ref={ref}>
            <motion.span
                style={{
                    opacity: isInView ? 1 : 0,
                    transform: isInView ? "none" : "translateX(-200px)",
                    transition: "all 1s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                }}
            >
                {children}
            </motion.span>
        </section>
    )
}


const data = [
    {
        name: "Python",
        desc: "Python is a popular general-purpose programming language. It is used in machine learning, web development, desktop applications, and many other fields. Fortunately for beginners, Python has a simple, easy-to-use syntax. This makes Python a great language to learn for beginners.",
        url: "/lang/python"
    },
    {
        name: "Java",
        desc: "Java is a general-purpose programming language intended to let programmers Write Once, Run Anywhere (WORA). This means that compiled Java code can run on all platforms that support Java without the need to recompile.",
        url: "/lang/java"
    },
    {
        name: "JavaScript",
        desc: "JavaScript is a multi-paradigm, dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — many structures from those languages apply to JavaScript as well. JavaScript supports object-oriented programming with object prototypes and classes.",
        url: "/lang/javascript"
    }
]

export function LangCard() {
    const direction = [100,-100]
    return (
        <div className="bg-gradient-to-l from-violet-200/75 to-pink-200/75 mt-12 overflow-hidden">
            <h2 className="text-center text-4xl pt-10">Explore Some Articles</h2>
                    {
                        data.map((item, index) => (
                            <motion.section
                                initial="hidden"
                                whileInView="visible"
                                viewport={{once: false}}
                                transition={{duration: 1}}
                                variants={{
                                    hidden: {opacity: 0, translateX: `${direction[Math.floor(Math.random()*2)]}%`, },
                                    visible: {opacity: 1, translateX: "0%", }
                                }}
                                className="overflow-hidden"
                            >
                                <div className=" sm:m-10 p-4">
                                    <a href="#" className="flex border rounded-lg m-10  hover:backdrop-blur-lg bg-gradient-to-l from-gray-200/25 via-fuchsia-200/25 to-stone-200/25 text-black">
                                        <h2 className="border-r-4 font-bold text-center mr-4 p-4 w-42">{item.name}</h2>
                                        <p className="p-4 ">{item.desc}</p>
                                    </a>
                                </div>
                            </motion.section>
                        ))
                    }
        </div>
    )
}