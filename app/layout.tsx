import type { Metadata } from "next";
import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pokémon Fan Site | Gotta Catch 'Em All",
  description:
    "Your ultimate fan destination for everything Pokémon — explore iconic Pokémon, learn about the franchise, and celebrate the world of trainers and battles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <nav className="sticky top-0 z-50 flex items-center justify-between px-6 py-1 bg-yellow-500 border-b-4 border-black shadow-md">
          <Link href="/" className="hover:opacity-80 transition-opacity duration-200">
            <Image src="/Pokeball.png" alt="Pokeball Logo" width={90} height={36} />
          </Link>
          <div className="flex items-center space-x-2 text-base font-extrabold text-black">
            <Link
              href="/pokemons"
              className="hover:text-white hover:bg-black px-4 py-1.5 rounded-full transition-all duration-200"
            >
              Pokémons
            </Link>
            <Link
              href="/about"
              className="hover:text-white hover:bg-black px-4 py-1.5 rounded-full transition-all duration-200"
            >
              About
            </Link>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
