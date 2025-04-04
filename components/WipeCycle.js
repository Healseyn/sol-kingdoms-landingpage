import Image from "next/image";
import styles from "@/styles/sections/Sections.module.css";

export default function SectionWipeCycle() {
  return (
    <section className="w-full bg-[#0b0b0c] text-white py-28 px-6 md:px-24">
      <div className={`${styles.container} ${styles.flexCol} ${styles.gap16} ${styles.textCenter}`}>
        {/* Título e Descrição */}
        <div className="max-w-3xl mx-auto">
          <h2 className={`${styles.headingPrimary}`}>
            The Cycle of the Kingdom
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Every 30 days, the world of Sol Kingdoms is wiped clean by a deadly storm.
            Only the Royal City and the Essence you’ve earned survive the devastation.
            Will you rise again stronger than before?
          </p>
        </div>

        {/* Imagens com tamanho fixo */}
        <div className="flex flex-col md:flex-row justify-center items-start md:gap-x-4 gap-y-10">
          {/* Begin */}
          <div className="w-[250px] flex flex-col items-center text-center">
            <Image
              src="/images/wipe-begin.png"
              alt="Begin"
              width={225}
              height={500}
              className="rounded-lg object-cover w-full max-h-[500px]"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">Begin</h3>
              <p className="text-sm text-gray-400">
                Start as a lone settler in a vast new land. Every kingdom begins from scratch with limited resources.
              </p>
            </div>
          </div>

          {/* Build */}
          <div className="w-[250px] flex flex-col items-center text-center">
            <Image
              src="/images/wipe-build.png"
              alt="Build"
              width={225}
              height={500}
              className="rounded-lg object-cover w-full max-h-[500px]"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">Build</h3>
              <p className="text-sm text-gray-400">
                Construct villages, train troops, and expand your influence before the storm arrives.
              </p>
            </div>
          </div>

          {/* Survive */}
          <div className="w-[250px] flex flex-col items-center text-center">
            <Image
              src="/images/wipe-survive.png"
              alt="Survive"
              width={225}
              height={500}
              className="rounded-lg object-cover w-full max-h-[500px]"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">Survive</h3>
              <p className="text-sm text-gray-400">
                When the wipe hits, only what you’ve sent to the Royal City remains. Collect Essence and prepare for the next cycle.
              </p>
            </div>
          </div>
        </div>


      </div>
    </section>
  );
}
