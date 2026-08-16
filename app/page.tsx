"use client";

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

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0F1C2E] text-white">
      <div className="mx-auto max-w-6xl px-6 py-8">

        {/* HEADER */}
        <header className="flex items-center justify-between">
          <a href="/" className="text-2xl font-bold">
            Quiz<span className="text-blue-500">Game</span>
          </a>

          <div className="flex gap-3">
            <a
              href="/categories"
              className="rounded-xl border border-white/10 px-5 py-2.5 text-sm transition hover:bg-white/10"
            >
              📚 Kategoriyalar
            </a>

            <a
              href="/profile"
              className="rounded-xl border border-white/10 px-5 py-2.5 text-sm transition hover:bg-white/10"
            >
              👤 Profil
            </a>
          </div>
        </header>

        {/* HERO */}
        <section className="mt-24 text-center">
          <div className="mx-auto max-w-3xl">

            <div className="inline-block rounded-full bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
              🧠 Bilimingni sinab ko'r
            </div>

            <h1 className="mt-6 text-5xl font-bold md:text-6xl">
              Quiz Game
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-gray-400">
              Turli mavzulardagi qiziqarli savollarga javob bering,
              bilimingizni sinang va eng yuqori natijani qo'lga kiriting.
            </p>

            {/* BOSHLASH */}
            <a
              href="/categories"
              className="mt-8 inline-flex rounded-2xl bg-blue-600 px-8 py-4 text-lg font-semibold transition hover:bg-blue-500"
            >
              🚀 Boshlash
            </a>

          </div>
        </section>

        {/* KATEGORIYA TANLASH */}
        <section className="mt-24">

          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-3xl font-bold">
                Kategoriya tanlang
              </h2>

              <p className="mt-2 text-gray-400">
                Test boshlash uchun mavzuni tanlang
              </p>
            </div>

            <a
              href="/categories"
              className="hidden text-sm text-blue-400 hover:text-blue-300 md:block"
            >
              Barchasi →
            </a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
            {categories.map((category) => (
              <a
                key={category.name}
                href={`/quiz?category=${encodeURIComponent(category.name)}`}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="text-4xl">
                  {category.emoji}
                </div>

                <h3 className="mt-4 font-semibold">
                  {category.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Testni boshlash →
                </p>
              </a>
            ))}
          </div>

        </section>

        {/* FEATURES */}
        <section className="mt-24 grid gap-5 md:grid-cols-3">

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl">🎯</div>
            <h3 className="mt-4 text-lg font-semibold">
              10 ta savol
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Har bir testda 10 ta tasodifiy savol.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl">🏆</div>
            <h3 className="mt-4 text-lg font-semibold">
              Natija
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Test yakunida natijangizni ko'ring.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-3xl">⚡</div>
            <h3 className="mt-4 text-lg font-semibold">
              Tezkor test
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Tez javob bering va bilimingizni sinang.
            </p>
          </div>

        </section>

        {/* FOOTER */}
        <footer className="mt-24 border-t border-white/10 py-8 text-center text-sm text-gray-500">
          © 2026 QuizGame
        </footer>

      </div>
    </main>
  );
}