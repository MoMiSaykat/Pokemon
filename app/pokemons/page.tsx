import Image from "next/image";

const pokemons = [
  {
    name: "Pikachu",
    image: "/pikachu.png",
    number: "#025",
    type: "Electric",
    typeColor: "bg-yellow-400 text-black",
    description:
      "Pikachu is the most iconic Pokémon of all time and the beloved partner of Ash Ketchum. This Electric-type mouse Pokémon stores electricity in its cheek pouches and releases powerful thunderbolts when threatened. Pikachu's cheerful personality and fierce loyalty have made it the face of the entire franchise.",
    stats: [
      { label: "HP", value: 35, max: 100 },
      { label: "Attack", value: 55, max: 100 },
      { label: "Speed", value: 90, max: 100 },
      { label: "Special Atk", value: 50, max: 100 },
    ],
    abilities: ["Static", "Lightning Rod"],
    height: "0.4 m",
    weight: "6.0 kg",
    funFact: "Pikachu was almost replaced as the mascot — Clefairy was the original choice!",
    accentColor: "border-yellow-400",
    glowColor: "hover:shadow-[0_0_30px_rgba(250,204,21,0.5)]",
    badgeBg: "bg-yellow-400",
  },
  {
    name: "Charizard",
    image: "/charizard.png",
    number: "#006",
    type: "Fire / Flying",
    typeColor: "bg-orange-500 text-white",
    description:
      "Charizard is one of the most powerful and fan-favorite Pokémon ever created. A Fire and Flying type, it can melt glaciers with its intense flame and soar at incredible speeds. Charizard only obeys trainers it truly respects — making the bond between Ash and his Charizard one of the most iconic in anime history.",
    stats: [
      { label: "HP", value: 78, max: 100 },
      { label: "Attack", value: 84, max: 100 },
      { label: "Speed", value: 100, max: 100 },
      { label: "Special Atk", value: 109, max: 150 },
    ],
    abilities: ["Blaze", "Solar Power"],
    height: "1.7 m",
    weight: "90.5 kg",
    funFact: "Charizard has two Mega Evolutions — Mega Charizard X and Y — each with different types!",
    accentColor: "border-orange-500",
    glowColor: "hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]",
    badgeBg: "bg-orange-500",
  },
  {
    name: "Meowth",
    image: "/meowth.png",
    number: "#052",
    type: "Normal",
    typeColor: "bg-gray-400 text-black",
    description:
      "Meowth is the cunning, coin-obsessed Normal-type Pokémon and a beloved member of Team Rocket. Unlike most Pokémon, Meowth taught itself to walk upright and speak human language — all to impress a Meowth he had a crush on. Despite being a villain's sidekick, Meowth's humor and heart have made him one of the most memorable characters in the series.",
    stats: [
      { label: "HP", value: 40, max: 100 },
      { label: "Attack", value: 45, max: 100 },
      { label: "Speed", value: 90, max: 100 },
      { label: "Special Atk", value: 40, max: 100 },
    ],
    abilities: ["Pickup", "Technician", "Unnerve"],
    height: "0.4 m",
    weight: "4.2 kg",
    funFact: "Meowth is one of the only Pokémon in the anime that can speak fluent human language.",
    accentColor: "border-gray-400",
    glowColor: "hover:shadow-[0_0_30px_rgba(156,163,175,0.5)]",
    badgeBg: "bg-gray-400",
  },
];

export default function PokemonsPage() {
  return (
    <main className="bg-black text-white min-h-screen">

      {/* Hero */}
      <section className="text-center py-16 px-6 bg-gradient-to-b from-yellow-500 via-yellow-600 to-black">
        <h1 className="text-5xl font-extrabold text-black drop-shadow mb-4">Featured Pokémon</h1>
        <p className="text-black font-semibold text-lg max-w-xl mx-auto">
          Meet three of the most iconic Pokémon in the franchise. Each one has a story worth knowing.
        </p>
      </section>

      {/* Pokemon Cards */}
      <section className="max-w-5xl mx-auto py-16 px-6 space-y-20">
        {pokemons.map((pokemon, index) => (
          <div
            key={pokemon.name}
            className={`bg-zinc-900 border-2 ${pokemon.accentColor} rounded-3xl overflow-hidden transition-shadow duration-300 ${pokemon.glowColor}`}
          >
            <div className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>

              {/* Image Side */}
              <div className="md:w-2/5 bg-zinc-800 flex items-center justify-center p-10">
                <Image
                  src={pokemon.image}
                  alt={pokemon.name}
                  width={260}
                  height={260}
                  className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Info Side */}
              <div className="md:w-3/5 p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gray-500 font-mono text-lg">{pokemon.number}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${pokemon.typeColor}`}>
                      {pokemon.type}
                    </span>
                  </div>
                  <h2 className="text-4xl font-extrabold text-yellow-400 mb-4">{pokemon.name}</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">{pokemon.description}</p>
                </div>

                {/* Stats */}
                <div className="mb-6">
                  <h3 className="text-yellow-400 font-bold mb-3 uppercase text-sm tracking-widest">Base Stats</h3>
                  <div className="space-y-2">
                    {pokemon.stats.map((stat) => (
                      <div key={stat.label} className="flex items-center gap-3">
                        <span className="text-gray-400 text-sm w-24">{stat.label}</span>
                        <div className="flex-1 bg-zinc-700 rounded-full h-2">
                          <div
                            className={`h-2 rounded-full ${pokemon.badgeBg}`}
                            style={{ width: `${(stat.value / stat.max) * 100}%` }}
                          />
                        </div>
                        <span className="text-gray-300 text-sm w-8 text-right">{stat.value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Details Row */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div>
                    <p className="text-gray-500 uppercase tracking-widest text-xs mb-1">Height</p>
                    <p className="text-white font-semibold">{pokemon.height}</p>
                  </div>
                  <div>
                    <p className="text-gray-500 uppercase tracking-widest text-xs mb-1">Weight</p>
                    <p className="text-white font-semibold">{pokemon.weight}</p>
                  </div>
                  <div className="col-span-2">
                    <p className="text-gray-500 uppercase tracking-widest text-xs mb-1">Abilities</p>
                    <div className="flex flex-wrap gap-2">
                      {pokemon.abilities.map((ability) => (
                        <span
                          key={ability}
                          className="bg-zinc-700 text-gray-200 text-xs px-3 py-1 rounded-full border border-zinc-600"
                        >
                          {ability}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Fun Fact */}
                <div className={`border-l-4 ${pokemon.accentColor} pl-4 py-2 bg-zinc-800 rounded-r-xl`}>
                  <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Fan Fact</p>
                  <p className="text-gray-300 text-sm italic">{pokemon.funFact}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Footer note */}
      <section className="py-10 text-center text-gray-600 text-sm px-6">
        <p>All Pokémon data is for fan purposes only. Pokémon © Nintendo / Game Freak / The Pokémon Company.</p>
      </section>

    </main>
  );
}
