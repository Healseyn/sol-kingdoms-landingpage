import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const roadmapData = [
  {
    date: "2025-06-15",
    title: "Combat System",
    desc: "Complete PvP battle mechanics and army management system",
  },
  {
    date: "2025-07-01",
    title: "Resource Economy",
    desc: "Balance and optimize all resource systems and trading mechanics",
  },
  {
    date: "2025-07-15",
    title: "Royal City Features",
    desc: "Complete Royal City mechanics and cross-season progression",
  },
  {
    date: "2025-08-01",
    title: "Beta Testing",
    desc: "Extensive beta testing with community feedback integration",
  },
  {
    date: "2025-08-15",
    title: "Game Polish",
    desc: "UI/UX improvements, bug fixes, and performance optimization",
  },
  {
    date: "2025-09-01",
    title: "Game Launch",
    desc: "Full game release with all features complete and tested",
  },
  {
    date: "2025-09-15",
    title: "Token Launch",
    desc: "$ESSENCE launches on pump.fun with fair distribution",
  },
  {
    date: "2025-10-01",
    title: "Season 1 Start",
    desc: "First official season with $ESSENCE rewards for top players",
  },
];

export default function Roadmap() {
  const scrollRef = useRef(null);
  const itemRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    // Criar objeto "today" em UTC
    const now = new Date();
    const todayUTC = new Date(Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()));

    const idx = roadmapData.findIndex((item) => {
      const [year, month, day] = item.date.split("-").map(Number);
      const itemDateUTC = new Date(Date.UTC(year, month - 1, day));
      return itemDateUTC.getTime() >= todayUTC.getTime();
    });

    const current = idx === -1 ? roadmapData.length - 1 : idx;
    setCurrentIndex(current);

    setTimeout(() => {
      const container = scrollRef.current;
      const item = itemRefs.current[current];
      if (container && item) {
        const containerRect = container.getBoundingClientRect();
        const itemRect = item.getBoundingClientRect();
        const offset =
          itemRect.left -
          containerRect.left -
          container.clientWidth / 2 +
          item.clientWidth / 2;
        container.scrollTo({
          left: container.scrollLeft + offset,
          behavior: "smooth",
        });
      }
    }, 500);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onWheel = (e) => {
      if (Math.abs(e.deltaX) < Math.abs(e.deltaY)) {
        e.preventDefault();
        container.scrollLeft += e.deltaY;
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  return (
    <section className="w-full bg-[#0b0b0c] py-20 px-4 md:py-28 md:px-24 text-white">
      <h2 className="text-3xl md:text-5xl font-bold text-yellow-400 text-center mb-8 md:mb-10">
        Development Roadmap
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto overflow-y-hidden scrollbar-thin scrollbar-thumb-yellow-600 scrollbar-track-transparent py-3 px-1 min-h-[260px]"
      >
        {roadmapData.map((step, idx) => {
          // Converter a data para UTC e formatar em inglês
          const [year, monthNum, day] = step.date.split("-").map(Number);
          const dateObjUTC = new Date(Date.UTC(year, monthNum - 1, day));
          const monthStr = dateObjUTC.toLocaleString("en-US", { month: "short", timeZone: "UTC" });
          const formattedDate = `${monthStr} ${day}`;

          return (
            <motion.div
              key={idx}
              ref={(el) => (itemRefs.current[idx] = el)}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`min-w-[240px] sm:min-w-[260px] md:min-w-[320px] bg-[#141414] border rounded-xl p-4 sm:p-5 md:p-6 shadow-md relative transition-all duration-300 ${idx === currentIndex
                  ? "border-yellow-400 ring-2 ring-yellow-500 animate-pulse"
                  : "border-yellow-900"
                }`}
            >
              <div
                className={`absolute -top-3 -left-3 font-bold w-6 h-6 flex items-center justify-center rounded-full text-xs ${idx === currentIndex
                    ? "bg-yellow-400 text-black"
                    : "bg-yellow-900 text-yellow-200"
                  }`}
              >
                {idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-yellow-300 font-semibold mb-1 sm:mb-2">
                {formattedDate}
              </p>
              <h3 className="text-base md:text-lg font-bold text-white mb-1">
                {step.title}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}