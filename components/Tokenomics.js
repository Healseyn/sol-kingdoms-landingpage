import Image from "next/image";
import { useState } from "react";
import TokenomicsChart from "./TokenomicsChart";
import { useInView } from "react-intersection-observer";

export default function TokenomicsSection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  return (
    <section className="w-full bg-[#0b0b0c] text-white py-28 px-6 md:px-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-10">
        {/* Título */}
        <div className="space-y-4">
          <h2 className="text-6xl font-extrabold tracking-wide text-yellow-400 drop-shadow-lg">
            ESSENCE
          </h2>
          <h3 className="text-3xl font-semibold uppercase tracking-widest text-yellow-300">
            Token
          </h3>
        </div>

        {/* Descrição refinada */}
        <div className="max-w-3xl text-sm text-white/80 leading-relaxed space-y-5">
          <p>
            <strong>Essence</strong> is the lifeblood of Sol Kingdoms — a gameplay-earned token that represents true skill and dedication. Unlike traditional gaming currencies, Essence is earned through strategic gameplay, epic battles, and contributions to the Royal City.
          </p>
          <p>
            Players who master the game and accumulate Essence gain access to exclusive upgrades, economy boosts, governance decisions, and cross-season advantages. It represents power, legacy, and proven gaming excellence.
          </p>
          <p>
            <strong>$ESSENCE will launch on pump.fun</strong> after the game development is complete, ensuring a <span className="text-yellow-400 font-semibold">fair and merit-based distribution</span> to skilled players.
          </p>
          <p className="text-white font-medium italic">
            Master the game. Earn your Essence. Build your legacy.
          </p>
        </div>

        {/* Imagem e botões */}
        <div className="flex flex-col items-center">
          <Image
            src="/images/essence-logo.png"
            alt="Essence Crystal"
            width={220}
            height={220}
            className="mx-auto drop-shadow-[0_0_20px_rgba(0,191,255,0.4)]"
          />
          <div className="mt-6 flex flex-col items-center gap-3">
            <a
              href="https://beta-play.solkingdoms.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase font-semibold text-base px-6 py-2 rounded-md bg-gradient-to-b from-[#f6e27a] to-[#d6a93f] text-[#2d1a00] border border-yellow-500 shadow-[0_5px_15px_rgba(255,223,100,0.3)] hover:brightness-110 hover:shadow-[0_8px_20px_rgba(255,223,100,0.5)] transition-all duration-300"
            >
              Play Beta Now
            </a>
            <a
              href="https://discord.gg/ScgrQRuub3"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase font-medium text-xs px-4 py-1 rounded-md border border-yellow-400 text-yellow-300 hover:bg-yellow-400/10 transition-all duration-300"
            >
              Join Community
            </a>
          </div>
        </div>

        {/* Status de desenvolvimento */}
        <div className="bg-[#141414] border border-yellow-800 rounded-xl p-6 max-w-2xl">
          <h4 className="text-xl font-semibold text-yellow-400 mb-3">Token Launch Strategy</h4>
          <div className="text-sm text-white/80 space-y-3 text-left">
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">1.</span>
              <span>Complete game development with all core features</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">2.</span>
              <span>Extensive beta testing and community feedback</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">3.</span>
              <span>Launch $ESSENCE on pump.fun with fair distribution</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">4.</span>
              <span>Reward early players and skilled strategists</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}