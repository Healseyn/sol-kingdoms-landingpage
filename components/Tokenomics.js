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
            <strong>Essence</strong> is the lifeblood of Sol Kingdoms — a multi-purpose token earned through gameplay, battles, contributions to the Royal City, and special events. Unlike standard in-game currencies, Essence is stored safely at the end of each 30-day wipe cycle, allowing you to retain real progress across seasons.
          </p>
          <p>
            Players who gather Essence gain access to exclusive upgrades, economy boosts, staking benefits, and governance decisions. It represents power, legacy, and long-term advantage.
          </p>
          <p>
            The <strong>presale</strong> is happening now on <span className="text-yellow-400 font-semibold">GoFundMemes</span>, the leading community-first launchpad on Solana.
          </p>
          <p className="text-white font-medium italic">
            Own a piece of the realm. Join the presale. Build your legacy.
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
              href="https://gofundmeme.io/campaigns/of21K6HeX4FVnkBAJkZ2ShiCv4xM6dcbPnHikhnQGFM"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase font-semibold text-base px-6 py-2 rounded-md bg-gradient-to-b from-[#f6e27a] to-[#d6a93f] text-[#2d1a00] border border-yellow-500 shadow-[0_5px_15px_rgba(255,223,100,0.3)] hover:brightness-110 hover:shadow-[0_8px_20px_rgba(255,223,100,0.5)] transition-all duration-300"
            >
              Join the Presale
            </a>
            <a
              href="https://docs.solkingdoms.xyz/tokenomics"
              target="_blank"
              rel="noopener noreferrer"
              className="uppercase font-medium text-xs px-4 py-1 rounded-md border border-yellow-400 text-yellow-300 hover:bg-yellow-400/10 transition-all duration-300"
            >
              Read the Docs
            </a>
          </div>
        </div>

        {/* Gráfico com legenda e total supply (internamente) */}
        <div ref={ref} className="mt-12 w-full max-w-[600px]">
          <TokenomicsChart
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            shouldAnimate={inView}
          />
        </div>
      </div>
    </section>
  );
}
