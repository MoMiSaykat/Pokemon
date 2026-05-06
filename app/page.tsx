import Image from "next/image";
import Link from "next/link";

const features = [
  {
    icon: "⚡",
    title: "Epic Battles",
    description:
      "Witness intense Pokemon battles where trainers and their Pokemon push beyond their limits to claim victory.",
  },
  {
    icon: "🌍",
    title: "Vast World",
    description:
      "Explore a world filled with diverse regions, each hiding rare Pokemon, hidden items, and legendary secrets.",
  },
  {
    icon: "❤️",
    title: "Unbreakable Bonds",
    description:
      "The bond between a trainer and their Pokemon is the true source of power — built on trust, love, and friendship.",
  },
  {
    icon: "🏆",
    title: "Become a Champion",
    description:
      "Train hard, collect badges, and challenge the Elite Four on your journey to become the greatest Pokemon Master.",
  },
];

const highlights = [
  { number: "900+", label: "Pokemon Species" },
  { number: "9", label: "Generations" },
  { number: "1996", label: "Est. Year" },
  { number: "∞", label: "Adventures" },
];

export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-b from-yellow-500 via-yellow-600 to-black overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_white_1px,_transparent_1px)] bg-[size:30px_30px]" />
        <Image
          src="/Pokemon_Logo.png"
          alt="Pokemon Logo"
          width={380}
          height={140}
          className="drop-shadow-2xl mb-6 z-10"
        />
        <p className="text-xl md:text-2xl font-semibold text-black max-w-2xl z-10 mb-8">
          Gotta Catch &apos;Em All — Your ultimate fan destination for everything Pokemon!
        </p>
        <Link
          href="/pokemons"
          className="z-10 bg-black text-yellow-400 font-bold text-lg px-8 py-3 rounded-full border-2 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg"
        >
          Meet the Pokemon →
        </Link>
      </section>

      {/* Stats Bar */}
      <section className="bg-yellow-500 py-8 px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {highlights.map((item) => (
            <div key={item.label}>
              <p className="text-4xl font-extrabold text-black">{item.number}</p>
              <p className="text-black font-semibold mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="max-w-5xl mx-auto py-20 px-6 text-center">
        <h2 className="text-4xl font-extrabold text-yellow-400 mb-6">What is Pokémon?</h2>
        <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
          Pokémon is a globally beloved franchise created by Satoshi Tajiri and Ken Sugimori, first launched in 1996 by Nintendo and Game Freak.
          Set in a world where humans and creatures called Pokémon coexist, trainers embark on journeys to catch, train, and battle these amazing
          creatures. From the original 151 to over 900 species today, Pokémon has grown into one of the highest-grossing media franchises of all time —
          spanning video games, anime, trading cards, movies, and more.
        </p>
      </section>

      {/* Feature Cards */}
      <section className="bg-yellow-950 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-extrabold text-yellow-400 text-center mb-12">Why We Love Pokémon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-black border border-yellow-500 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-shadow duration-300"
              >
                <div className="text-5xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{f.title}</h3>
                <p className="text-gray-400">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center bg-gradient-to-t from-yellow-600 to-black">
        <h2 className="text-4xl font-extrabold text-white mb-4">Ready to Explore?</h2>
        <p className="text-gray-300 text-lg mb-8">
          Check out our featured Pokémon and dive into their world.
        </p>
        <Link
          href="/pokemons"
          className="bg-yellow-400 text-black font-bold text-lg px-10 py-3 rounded-full hover:bg-yellow-300 transition-all duration-300 shadow-xl"
        >
          View Pokémon
        </Link>
      </section>

    </main>
  );
}
