"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/loading";
import { WelcomeScreen } from "@/components/welcome";
import { WrappedScreen } from "@/components/wrapped";
import { QuizScreen } from "@/components/quiz";
import { WRAPPED_CARDS } from "@/data/wrappedData";
import { QUIZ_QUESTIONS } from "@/data/quizData";

type AppScreen = "loading" | "welcome" | "wrapped" | "quiz" | "complete";

export default function Home() {
  const [screen, setScreen] = useState<AppScreen>("loading");

  if (screen === "loading") {
    return (
      <LoadingScreen onComplete={() => setScreen("welcome")} />
    );
  }

  if (screen === "welcome") {
    return (
      <WelcomeScreen onStart={() => setScreen("wrapped")} />
    );
  }

  if (screen === "wrapped") {
    return (
      <WrappedScreen
        cards={WRAPPED_CARDS}
        onComplete={() => setScreen("quiz")}
      />
    );
  }

  if (screen === "quiz") {
    return (
      <QuizScreen
        questions={QUIZ_QUESTIONS}
        onComplete={(score) => {
          console.log(`Quiz score: ${score}/${QUIZ_QUESTIONS.length}`);
          setScreen("complete");
        }}
      />
    );
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 px-4">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">
        Coming Soon: Fun Game Mile!! 🎉
      </h1>
    </div>
  );
}
