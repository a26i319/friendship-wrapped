"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/loading";
import { WelcomeScreen } from "@/components/welcome";
import { WrappedScreen } from "@/components/wrapped";
import { QuizScreen } from "@/components/quiz";
import { ResultsScreen } from "@/components/results";
import { EndingScreen } from "@/components/ending";
import { WRAPPED_CARDS } from "@/data/wrappedData";
import { QUIZ_QUESTIONS } from "@/data/quizData";




type AppScreen = "loading" | "welcome" | "wrapped" | "quiz" | "results" | "ending" | "complete";

export default function Home() {
  const [screen, setScreen] = useState<AppScreen>("loading");
  const [quizScore, setQuizScore] = useState(0);

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
          setQuizScore(score);
          setScreen("results");
        }}
      />
    );
  }

  if (screen === "results") {
    return (
      <ResultsScreen
        score={quizScore}
        totalQuestions={QUIZ_QUESTIONS.length}
        onContinue={() => setScreen("ending")}
      />
    );
  }

  if (screen === "ending") {
    return (
      <EndingScreen onClose={() => setScreen("complete")} />
    );
  }

  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-gradient-to-br from-pink-300 via-white to-pink-300 px-4">
      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        Thanks for visiting
      </h1>
      <p className="text-gray-600 text-3xl">
        Unnecessary project is completed for now, but I hope you had fun exploring it! See you in the next update.
      </p>
    </div>
  );
}
