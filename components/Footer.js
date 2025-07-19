import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white border-t border-yellow-800 py-12 px-6 md:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center md:text-left items-center md:items-start">
        {/* Logo + descrição */}
        <div className="flex flex-col items-center md:items-start">
          <Image
            src="/images/logo.png"
            alt="Sol Kingdoms Logo"
            width={150}
            height={60}
            className="mb-4"
          />
        </div>

        {/* Game */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Game</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link href="/">Home</Link></li>
            <li><Link href="#wipe">Wipe Cycle</Link></li>
            <li><Link href="#tokenomics">Tokenomics</Link></li>
            <li><Link href="#roadmap">Roadmap</Link></li>
            <li><Link href="#faq">FAQ</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="https://docs.solkingdoms.xyz" target="_blank" rel="noreferrer">
                Game Docs
              </a>
            </li>
            <li>
              <a href="https://pump.fun/coin/9vZC2PjHv2D8efPfw53dmyHGqAgjd8bePJ2RLT4dQuff" target="_blank" rel="noreferrer">
                Buy on pump.fun
              </a>
            </li>
            <li>
              <a href="https://solana.com" target="_blank" rel="noreferrer">
                Solana Network
              </a>
            </li>
            <li>
              <a href="https://beta-play.solkingdoms.xyz" target="_blank" rel="noreferrer">
                Play Beta
              </a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="text-yellow-400 font-semibold mb-3">Community</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a href="https://twitter.com/sol_kingdoms" target="_blank" rel="noreferrer">
                Twitter / X
              </a>
            </li>
            <li>
              <a href="https://discord.gg/ScgrQRuub3" target="_blank" rel="noreferrer">
                Discord
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Sol Kingdoms. All rights reserved.
      </div>
    </footer>
  );
}