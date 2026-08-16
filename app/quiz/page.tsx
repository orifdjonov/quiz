"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { questions } from "../data/questions";

type Question = {
  category: string;
  question: string;
  options: string[];
  answer: string;
};

type UserStats = {
  xp: number;
  level: number;
  streak: number;
  tests: number;
  correct: number;
  totalQuestions: number;
};

function shuffle<T>(array: T[]) {
  return [...array].sort(() => Math.random() - 0.5);
}

function getLevel(xp: number) {
  return Math.floor(xp / 500) + 1;
}

function saveResult(correctAnswers: number, total: number) {
  const saved = localStorage.getItem("quiz-stats");

  const oldStats: UserStats = saved
    ? JSON.parse(saved)
    : {
        xp: 0,
        level: 1,
        streak: 0,
        tests: 0,
        correct: 0,
        totalQuestions: 0,
      };

  const today = new Date().toISOString().split("T")[0];

  const lastDate = localStorage.getItem("quiz-last-date");

  let streak = oldStats.streak;

  if (lastDate !== today) {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);

    const yesterdayString = yesterday
      .toISOString()
      .split("T")[0];

    if (lastDate === yesterdayString) {
      streak += 1;
    } else {
      streak = 1;
    }

    localStorage.setItem("quiz-last-date", today);
  }

  const earnedXP = correctAnswers * 50;

  const newXP = oldStats.xp + earnedXP;

  const newStats: UserStats = {
    xp: newXP,
    level: getLevel(newXP),
    streak,
    tests: oldStats.tests + 1,
    correct: oldStats.correct + correctAnswers,
    totalQuestions: oldStats.totalQuestions + total,
  };

  localStorage.setItem(
    "quiz-stats",
    JSON.stringify(newStats)
  );

  return {
    ...newStats,
    earnedXP,
  };
}

export default function QuizPage() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [timeLeft, setTimeLeft] = useState(30);

  const [finished, setFinished] = useState(false);
  const [earnedXP, setEarnedXP] = useState(0);
  const [finalScore, setFinalScore] = useState(0);

  useEffect(() => {
    let list = questions as Question[];

    if (category) {
      list = list.filter(
        (q) =>
          q.category.toLowerCase() ===
          category.toLowerCase()
      );
    }

    setQuizQuestions(shuffle(list).slice(0, 10));
  }, [category]);

  useEffect(() => {
    if (finished || quizQuestions.length === 0) return;

    if (timeLeft <= 0) {
      nextQuestion();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [
    timeLeft,
    finished,
    quizQuestions.length,
  ]);

  function finishQuiz(correct: number) {
    const result = saveResult(
      correct,
      quizQuestions.length
    );

    setFinalScore(correct);
    setEarnedXP(result.earnedXP);
    setFinished(true);
  }

  function nextQuestion() {
    if (current + 1 >= quizQuestions.length) {
      finishQuiz(score);
      return;
    }

    setCurrent((prev) => prev + 1);
    setSelected(null);
    setTimeLeft(30);
  }

  function handleAnswer(option: string) {
    if (selected !== null) return;

    setSelected(option);

    const isCorrect =
      option === quizQuestions[current].answer;

    const newScore = isCorrect
      ? score + 1
      : score;

    if (isCorrect) {
      setScore(newScore);
    }

    setTimeout(() => {
      if (current + 1 >= quizQuestions.length) {
        finishQuiz(newScore);
      } else {
        setCurrent((prev) => prev + 1);
        setSelected(null);
        setTimeLeft(30);
      }
    }, 900);
  }

  if (quizQuestions.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0F1C2E] px-6 text-white">
        <div className="text-center">
          <div className="text-5xl">📚</div>

          <h1 className="mt-5 text-2xl font-bold">
            Savollar topilmadi
          </h1>

          <p className="mt-3 text-gray-400">
            {category
              ? `"${category}" kategoriyasida savol yo'q`
              : "Savollar mavjud emas"}
          </p>

          <button
            onClick={() =>
              window.location.assign("/categories")
            }
            className="mt-6 rounded-xl bg-blue-600 px-6 py-3 font-semibold hover:bg-blue-500"
          >
            Kategoriyalarga qaytish
          </button>
        </div>
      </main>
    );
  }

  if (finished) {
    const percentage = Math.round(
      (finalScore / quizQuestions.length) * 100
    );

    const level = Math.floor(
      JSON.parse(
        localStorage.getItem("quiz-stats") || '{"xp":0}'
      ).xp / 500
    ) + 1;

    let message = "Yana bir bor urinib ko'ring 💪";

    if (percentage >= 90) {
      message = "Ajoyib natija! 🔥";
    } else if (percentage >= 70) {
      message = "Juda yaxshi! 👏";
    } else if (percentage >= 50) {
      message = "Yaxshi natija! 👍";
    }

    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0F1C2E] px-6 text-white">
        <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 text-center">

          <div className="text-7xl">🏆</div>

          <h1 className="mt-5 text-3xl font-bold">
            Test tugadi!
          </h1>

          <p className="mt-3 text-gray-400">
            {message}
          </p>

          <div className="mx-auto mt-8 flex h-36 w-36 items-center justify-center rounded-full border-8 border-blue-500">
            <div>
              <div className="text-4xl font-bold">
                {percentage}%
              </div>

              <div className="text-xs text-gray-500">
                natija
              </div>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">

            <div className="rounded-2xl bg-white/5 p-4">
              <div className="text-xl font-bold">
                {finalScore}
              </div>

              <div className="mt-1 text-xs text-gray-500">
                To'g'ri
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <div className="text-xl font-bold">
                {quizQuestions.length - finalScore}
              </div>

              <div className="mt-1 text-xs text-gray-500">
                Xato
              </div>
            </div>

            <div className="rounded-2xl bg-blue-500/10 p-4">
              <div className="text-xl font-bold text-blue-400">
                +{earnedXP}
              </div>

              <div className="mt-1 text-xs text-gray-500">
                XP
              </div>
            </div>

          </div>

          <div className="mt-5 grid grid-cols-2 gap-3">

            <div className="rounded-2xl bg-white/5 p-4">
              <div className="text-xl">
                ⚡
              </div>

              <div className="mt-1 text-sm font-semibold">
                Level {level}
              </div>
            </div>

            <div className="rounded-2xl bg-white/5 p-4">
              <div className="text-xl">
                🔥
              </div>

              <div className="mt-1 text-sm font-semibold">
                Streak
              </div>
            </div>

          </div>

          <div className="mt-8 flex gap-3">

            <button
              onClick={() =>
                window.location.reload()
              }
              className="flex-1 rounded-xl border border-white/10 py-3 font-semibold hover:bg-white/10"
            >
              🔄 Qayta
            </button>

            <button
              onClick={() =>
                window.location.assign("/categories")
              }
              className="flex-1 rounded-xl bg-blue-600 py-3 font-semibold hover:bg-blue-500"
            >
              📚 Kategoriya
            </button>

          </div>

          <button
            onClick={() =>
              window.location.assign("/profile")
            }
            className="mt-3 w-full rounded-xl border border-white/10 py-3 font-semibold hover:bg-white/10"
          >
            👤 Profilim
          </button>

        </div>
      </main>
    );
  }

  const question = quizQuestions[current];

  const progress =
    ((current + 1) / quizQuestions.length) * 100;

  return (
    <main className="min-h-screen bg-[#0F1C2E] px-6 py-8 text-white">

      <div className="mx-auto max-w-3xl">

        <div className="flex items-center justify-between">

          <button
            onClick={() =>
              window.location.assign("/categories")
            }
            className="text-sm text-gray-400 hover:text-white"
          >
            ← Kategoriyalar
          </button>

          <div className="rounded-xl bg-white/5 px-4 py-2 text-sm">
            Savol{" "}
            <span className="font-semibold">
              {current + 1}
            </span>
            <span className="text-gray-500">
              /{quizQuestions.length}
            </span>
          </div>

        </div>

        <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full bg-blue-500 transition-all duration-300"
            style={{
              width: `${progress}%`,
            }}
          />
        </div>

        <div className="mt-8 flex justify-center">
          <div
            className={`flex h-16 w-16 items-center justify-center rounded-full border-4 ${
              timeLeft <= 10
                ? "border-red-500 text-red-400"
                : "border-blue-500 text-blue-400"
            }`}
          >
            <span className="text-xl font-bold">
              {timeLeft}
            </span>
          </div>
        </div>

        <div className="mt-8">
          <span className="rounded-lg bg-blue-500/10 px-3 py-2 text-sm font-medium text-blue-400">
            {question.category}
          </span>
        </div>

        <h1 className="mt-5 text-2xl font-bold leading-relaxed md:text-3xl">
          {question.question}
        </h1>

        <div className="mt-8 space-y-4">

          {question.options.map((option, index) => {

            const isSelected = selected === option;

            const isCorrect =
              selected !== null &&
              option === question.answer;

            let style =
              "border-white/10 bg-white/5 hover:bg-white/10";

            if (selected !== null) {
              if (isCorrect) {
                style =
                  "border-green-500 bg-green-500/10";
              } else if (isSelected) {
                style =
                  "border-red-500 bg-red-500/10";
              } else {
                style =
                  "border-white/10 bg-white/5 opacity-60";
              }
            }

            return (
              <button
                key={option}
                type="button"
                disabled={selected !== null}
                onClick={() =>
                  handleAnswer(option)
                }
                className={`w-full rounded-2xl border p-5 text-left transition ${style}`}
              >
                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10 font-bold">
                    {String.fromCharCode(65 + index)}
                  </div>

                  <span className="font-medium">
                    {option}
                  </span>

                  {selected !== null &&
                    isCorrect && (
                      <span className="ml-auto text-xl">
                        ✓
                      </span>
                    )}

                  {selected !== null &&
                    isSelected &&
                    !isCorrect && (
                      <span className="ml-auto text-xl">
                        ✕
                      </span>
                    )}

                </div>
              </button>
            );
          })}

        </div>

        <div className="mt-8 flex justify-between text-sm text-gray-500">
          <span>
            🏆 Ball: {score}
          </span>

          <span>
            📚 {question.category}
          </span>
        </div>

      </div>

    </main>
  );
}