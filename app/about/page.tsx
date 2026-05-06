import Image from "next/image";

const timeline = [
  { year: "1996", event: "Pokémon Red & Green released in Japan for Game Boy." },
  { year: "1998", event: "Pokémon reaches North America — Pokémania begins!" },
  { year: "1999", event: "The Pokémon Trading Card Game launches worldwide." },
  { year: "2000", event: "Pokémon Gold & Silver introduce 100 new species." },
  { year: "2006", event: "Pokémon Diamond & Pearl bring the series to Nintendo DS." },
  { year: "2016", event: "Pokémon GO takes the world by storm with AR gameplay." },
  { year: "2022", event: "Pokémon Legends: Arceus reimagines the open-world formula." },
  { year: "2023", event: "Pokémon Scarlet & Violet hit 20M+ copies sold." },
];

const team = [
  { name: "Satoshi Tajiri", role: "Creator & Original Designer", emoji: "🎮" },
  { name: "Ken Sugimori", role: "Lead Artist & Character Designer", emoji: "🎨" },
  { name: "Junichi Masuda", role: "Composer & Game Director", emoji: "🎵" },
];

export default function AboutPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-b from-yellow-500 via-yellow-600 to-black">
        <Image
          src="/Pokemon_Logo.png"
          alt="Pokemon Logo"
          width={340}
          height={130}
          className="drop-shadow-2xl mb-6"
        />
        <h1 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
          About This Fan Site
        </h1>
        <p className="text-black font-semibold text-lg max-w-xl">
          A love letter to the franchise that defined a generation. Built by fans, for fans.
        </p>
      </section>

      {/* About the Site */}
      <section className="max-w-4xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-extrabold text-yellow-400 mb-6">Our Mission</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          Welcome to the ultimate Pokémon fan page! This site is dedicated to celebrating the magic of Pokémon —
          the games, the anime, the cards, and most importantly, the memories. Whether you grew up watching Ash
          and Pikachu on Saturday mornings or you just caught your first shiny last week, this place is for you.
          We believe Pokémon is more than a franchise — it&apos;s a community, a childhood, and a lifelong adventure.
        </p>
      </section>

      {/* About the Franchise */}
      <section className="bg-yellow-950 py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-yellow-400 text-center mb-10">The Pokémon Franchise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-black border border-yellow-500 rounded-2xl p-6">
              <p className="text-5xl font-extrabold text-yellow-400">900+</p>
              <p className="text-gray-300 mt-2">Unique Pokémon Species</p>
            </div>
            <div className="bg-black border border-yellow-500 rounded-2xl p-6">
              <p className="text-5xl font-extrabold text-yellow-400">$150B+</p>
              <p className="text-gray-300 mt-2">Total Franchise Revenue</p>
            </div>
            <div className="bg-black border border-yellow-500 rounded-2xl p-6">
              <p className="text-5xl font-extrabold text-yellow-400">1B+</p>
              <p className="text-gray-300 mt-2">Games Sold Worldwide</p>
            </div>
          </div>
          <p className="text-gray-400 text-center mt-8 text-base leading-relaxed">
            Pokémon is the highest-grossing media franchise of all time, surpassing even Hello Kitty and Star Wars.
            Created by Satoshi Tajiri and published by Nintendo, it has captivated fans across every generation since 1996.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-extrabold text-yellow-400 text-center mb-10">A Legacy Through the Years</h2>
        <div className="relative border-l-2 border-yellow-500 pl-6 space-y-8">
          {timeline.map((item) => (
            <div key={item.year} className="relative">
              <div className="absolute -left-[34px] top-1 w-4 h-4 rounded-full bg-yellow-400 border-2 border-black" />
              <p className="text-yellow-400 font-bold text-lg">{item.year}</p>
              <p className="text-gray-300 mt-1">{item.event}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Creators */}
      <section className="bg-yellow-950 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-yellow-400 mb-10">The Minds Behind Pokémon</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {team.map((person) => (
              <div
                key={person.name}
                className="bg-black border border-yellow-500 rounded-2xl p-6 hover:shadow-[0_0_20px_rgba(234,179,8,0.4)] transition-shadow duration-300"
              >
                <div className="text-5xl mb-3">{person.emoji}</div>
                <h3 className="text-yellow-400 font-bold text-lg">{person.name}</h3>
                <p className="text-gray-400 text-sm mt-1">{person.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="py-10 text-center text-gray-500 text-sm px-6">
        <p>
          This is a fan-made site. Pokémon and all related names are trademarks of Nintendo, Game Freak, and The Pokémon Company.
        </p>
      </section>

    </main>
  );
}
