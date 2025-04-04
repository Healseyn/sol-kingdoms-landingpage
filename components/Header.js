import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import styles from "@/styles/sections/Header.module.css";

export default function HeroHeader() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section
      className={styles.section}
      style={{ backgroundImage: "url('/images/header-bg.png')" }}
    >
      <div className={styles.overlay} />

      <div className="absolute top-6 w-full z-10 flex justify-center">
        <img
          src="/images/logo.png"
          alt="Sol Kingdoms"
          className={`${styles.logo} drop-shadow-lg transition-opacity duration-1000`}
          style={{ opacity: loaded ? 1 : 0 }}
        />
      </div>

      {/* Botões */}
      <div className="absolute bottom-32 w-full z-10 flex flex-col items-center justify-center text-center transition-opacity duration-1000 px-4">

        <a
          href="https://beta-play.solkingdoms.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="uppercase font-semibold text-lg px-10 py-3 rounded-md bg-gradient-to-b from-[#f6e27a] to-[#d6a93f] text-[#2d1a00] border border-yellow-500 shadow-[0_5px_15px_rgba(255,223,100,0.3)] hover:brightness-110 hover:shadow-[0_8px_20px_rgba(255,223,100,0.5)] transition-all duration-300"
        >
          Enter the Kingdom
        </a>

        <a
          href="https://gofundmeme.io/campaigns/of21K6HeX4FVnkBAJkZ2ShiCv4xM6dcbPnHikhnQGFM"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 uppercase font-medium text-sm px-6 py-2 rounded-md border border-yellow-400 text-yellow-300 hover:bg-yellow-400/10 transition-all duration-300"
        >
          Join Presale
        </a>
      </div>


      {/* Scroll down */}
      <div className="absolute bottom-6 left-0 right-0 z-10 flex flex-col items-center text-sm text-gray-200 opacity-80 animate-bounce">
        <ChevronDownIcon className="w-6 h-6" />
        <span className="mt-1 tracking-wider">Scroll Down</span>
      </div>
    </section>
  );
}
