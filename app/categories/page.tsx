"use client";

import { useRouter } from "next/navigation";

const categories = [
  { emoji: "💻", name: "IT" },
  { emoji: "📜", name: "Tarix" },
  { emoji: "⚽", name: "Sport" },
  { emoji: "🎬", name: "Kino" },
  { emoji: "🌍", name: "Geografiya" },
  { emoji: "🔬", name: "Fan" },
  { emoji: "🚗", name: "Avto" },
  { emoji: "🧠", name: "Mantiq" },
  { emoji: "🎵", name: "Musiqa" },
];

export default function CategoriesPage() {
  const router = useRouter();

  function openCategory(category: string) {
    router.push(`/quiz?category=${encodeURIComponent(category)}`);
  }

  return (
    <main className="min-h-screen bg-[#0F1C2E] px-6 py-10 text-white">
      <div className="mx-auto max-w-5xl">

        <button
          onClick={() => router.push("/")}
          className="text-gray-400 hover:text-white"
        >
          ← Bosh sahifa
        </button>

        <h1 className="mt-10 text-4xl font-bold">
          Kategoriyalar
        </h1>

        <p className="mt-2 text-gray-400">
          O'zingizga yoqqan kategoriyani tanlang
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
          {categories.map((category) => (
            <button
              key={category.name}
              type="button"
              onClick={() => openCategory(category.name)}
              className="cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-6 text-left transition hover:-translate-y-1 hover:bg-white/10 active:scale-95"
            >
              <div className="text-4xl">
                {category.emoji}
              </div>

              <h2 className="mt-4 text-xl font-semibold">
                {category.name}
              </h2>

              <p className="mt-2 text-sm text-gray-500">
                Testni boshlash →
              </p>
            </button>
          ))}
        </div>

      </div>
    </main>
  );
}