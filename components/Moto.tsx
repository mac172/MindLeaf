"use client";
import { TextGenerateEffect } from "./ui/TextGen";

const words = `Let's start journey to the moon. Bring your brain, learn to code.
MindLeaf is an open source project that helps you learn to code. Giving you proper roadmap to get started. Also a community of developers and mentors. 
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
