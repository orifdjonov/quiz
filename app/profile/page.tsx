"use client";

import { useEffect, useState } from "react";

type UserStats = {
  xp: number;
  level: number;
  streak: number;
  tests: number;
  correct: number;
  totalQuestions: number;
};

const defaultStats: UserStats = {
  xp: 0,
  level: 1,
  streak: 0,
  tests: 0,
  correct: 0,
  totalQuestions: 0,
};

export default function ProfilePage() {
  const [stats, setStats] =
    useState<UserStats>(defaultStats);

  useEffect(() => {
    const saved = localStorage.getItem("quiz-stats");

    if (saved) {
      setStats(JSON.parse(saved));
    }
  }, []);

  const accuracy =
    stats.totalQuestions > 0
      ? Math.round(
          (stats.correct / stats.totalQuestions) * 100
        )
      : 0;

  const currentLevelXP =
    stats.xp % 500;

  const xpProgress =
    (currentLevelXP / 500) * 100;

  return (
    <main className="min-h-screen bg-[#0F1C2E] px-6 py-10 text-white">

      <div className="mx-auto max-w-4xl">

        <button
          onClick={() =>
            window.location.assign("/")
          }
          className="text-gray-400 hover:text-white"
        >
          ← Bosh sahifa
        </button>

        {/* PROFILE */}
        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8">

          <div className="flex flex-col items-center gap-5 md:flex-row">

            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-600 text-4xl">
              👤
            </div>

            <div className="text-center md:text-left">
              <h1 className="text-3xl font-bold">
                Quiz Player
              </h1>

              <p className="mt-1 text-gray-400">
                Quiz ishtirokchisi
              </p>
            </div>

            <div className="md:ml-auto">
              <div className="rounded-2xl bg-blue-500/10 px-6 py-4 text-center">
                <div className="text-sm text-gray-400">
                  LEVEL
                </div>

                <div className="mt-1 text-3xl font-bold text-blue-400">
                  {stats.level}
                </div>
              </div>
            </div>

          </div>

          {/* XP */}
          <div className="mt-8">

            <div className="flex justify-between text-sm">
              <span className="text-gray-400">
                XP
              </span>

              <span>
                {currentLevelXP} / 500
              </span>
            </div>

            <div className="mt-2 h-3 overflow-hidden rounded-full bg-white/10">

              <div
                className="h-full bg-blue-500 transition-all"
                style={{
                  width: `${xpProgress}%`,
                }}
              />

            </div>

            <p className="mt-2 text-xs text-gray-500">
              Keyingi levelgacha{" "}
              {500 - currentLevelXP} XP
            </p>

          </div>

        </div>

        {/* STATS */}
        <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-3xl">
              🎯
            </div>

            <div className="mt-4 text-2xl font-bold">
              {stats.tests}
            </div>

            <div className="text-sm text-gray-500">
              Testlar
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-3xl">
              ✅
            </div>

            <div className="mt-4 text-2xl font-bold">
              {stats.correct}
            </div>

            <div className="text-sm text-gray-500">
              To'g'ri javob
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-3xl">
              🔥
            </div>

            <div className="mt-4 text-2xl font-bold">
              {stats.streak}
            </div>

            <div className="text-sm text-gray-500">
              Streak
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <div className="text-3xl">
              📊
            </div>

            <div className="mt-4 text-2xl font-bold">
              {accuracy}%
            </div>

            <div className="text-sm text-gray-500">
              Aniqlik
            </div>
          </div>

        </div>

        {/* TOTAL XP */}
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">

          <div className="flex items-center justify-between">

            <div>
              <p className="text-sm text-gray-500">
                Umumiy XP
              </p>

              <p className="mt-1 text-3xl font-bold">
                {stats.xp} XP
              </p>
            </div>

            <div className="text-5xl">
              ⚡
            </div>

          </div>

        </div>

        {/* ACTIONS */}
        <div className="mt-6 flex gap-3">

          <button
            onClick={() =>
              window.location.assign("/categories")
            }
            className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-500"
          >
            🚀 Test boshlash
          </button>

          <button
            onClick={() =>
              window.location.assign("/")
            }
            className="flex-1 rounded-xl border border-white/10 py-3 font-semibold hover:bg-white/10"
          >
            🏠 Bosh sahifa
          </button>

        </div>

      </div>

    </main>
  );
}