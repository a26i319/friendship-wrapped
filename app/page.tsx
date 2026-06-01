"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/loading";
import { WelcomeScreen } from "@/components/welcome";

type AppScreen = "loading" | "welcome" | "wrapped";

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

  return (
    <div className="flex flex-col flex-1 items-center justify-center min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 px-4">
      <h1 className="text-4xl font-bold text-pink-600 mb-4">
        Coming Soon: Fun Game Mile!! 🎉
      </h1>
    </div>
  );
}
