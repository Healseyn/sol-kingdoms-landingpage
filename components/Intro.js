import Image from "next/image";
import styles from "@/styles/sections/Sections.module.css";

export default function Intro() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${styles.flexCol} ${styles.gap16}`}>
        {/* Topo – Texto e Mapa */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Texto principal */}
          <div className="md:w-2/3">
            <h2 className={`${styles.headingPrimary} text-center md:text-left`}>
              What is Sol Kingdoms?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-4">
              Sol Kingdoms is a strategic web3 realm where players build, expand, and battle for control over a vast land. Colonies rise and fall in a never-ending cycle of survival and ambition.
            </p>
            <p className="text-base md:text-lg text-gray-400">
              In a world cursed by endless cycles of rise and ruin, only the strongest kingdoms endure. Manage resources, forge alliances, and strike at the heart of your enemies.
              Earn Essence, the lifeblood of this world, and channel it into power. Backed by the Solana blockchain, Essence flows only to those who conquer.
            </p>
          </div>

          {/* Box do mapa */}
          <div className="md:w-1/3 flex justify-center">
            <div className="w-[340px] h-[220px] overflow-hidden rounded-md border border-yellow-600 shadow-lg bg-[#181818]">
              <Image
                src="/images/introimage.png"
                alt="Map Preview"
                width={340}
                height={220}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

        </div>

        {/* Feature blocks */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {/* 1 - Colonize */}
          <div className="flex flex-col items-center p-4 hover:bg-[#121212] rounded-lg transition duration-300">
            <Image
              src="/images/icons/defend.png"
              alt="Colonize"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Colonize</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Send settlers across dangerous lands to found new cities and claim territory for your kingdom.
            </p>
          </div>

          {/* 2 - Build & Upgrade */}
          <div className="flex flex-col items-center p-4 hover:bg-[#121212] rounded-lg transition duration-300">
            <Image
              src="/images/icons/build.png"
              alt="Build & Upgrade"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Build & Upgrade</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Grow your colony from a humble village into a fortified kingdom with powerful technologies.
            </p>
          </div>

          {/* 3 - Battle for Resources */}
          <div className="flex flex-col items-center p-4 hover:bg-[#121212] rounded-lg transition duration-300">
            <Image
              src="/images/icons/battle.png"
              alt="Battle for Resources"
              width={64}
              height={64}
              className="mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Battle for Resources</h3>
            <p className="text-sm text-gray-400 max-w-xs">
              Train elite armies, defend your land, and launch raids on rival cities to control vital resources.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
