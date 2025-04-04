import Image from "next/image";
import styles from "@/styles/sections/Sections.module.css";

export default function Resources() {
  return (
    <section className={styles.section}>
      <div className={`${styles.container} ${styles.flexCol} ${styles.gap16} ${styles.textCenter}`}>
        {/* Title and description */}
        <div className="max-w-3xl mx-auto">
          <h2 className={styles.headingPrimary}>Game Resources</h2>
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
            Sol Kingdoms features a variety of strategic resources. Manage them wisely
            to build, expand, and survive the wipe.
          </p>
        </div>

        {/* Resource grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            {
              name: "Wood",
              icon: "/images/resources/wood.png",
              desc: "Core material for all basic construction.",
            },
            {
              name: "Stone",
              icon: "/images/resources/stone.png",
              desc: "Essential for fortifications and upgrades.", 
            },
            {
              name: "Iron",
              icon: "/images/resources/iron.png",
              desc: "Used for military production and advanced buildings.",
            },
            {
              name: "Food",
              icon: "/images/resources/food.png",
              desc: "Feeds your population and supports armies.",
            },
            {
              name: "Tools",
              icon: "/images/resources/tools.png",
              desc: "Boosts production speed and efficiency.",
            },
            {
              name: "Luxury",
              icon: "/images/resources/luxury.png",
              desc: "Increases noble satisfaction and loyalty.",
            },
            {
              name: "Coins",
              icon: "/images/resources/coins.png",
              desc: "For trading, hiring units, and city upkeep.",
            },
            {
              name: "Essence",
              icon: "/images/resources/essence.png",
              desc: "The eternal token. Stored in the Royal City. Blockchain-backed.",
            },
          ].map((res, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center p-4 hover:bg-[#121212] rounded-lg transition duration-300"
            >
              <Image
                src={res.icon}
                alt={res.name}
                width={64}
                height={64}
                className="mb-3"
              />
              <h3 className="text-xl font-semibold text-yellow-400 mb-1">{res.name}</h3>
              <p className="text-sm text-gray-300 text-center">{res.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
