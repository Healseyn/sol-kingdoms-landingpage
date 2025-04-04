"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Presale", value: 35, color: "#F6E05E" },     
  { name: "Play2Earn", value: 20, color: "#63B3ED" },    
  { name: "Team", value: 5, color: "brown" },          
  { name: "Marketing", value: 5, color: "#ED64A6" },       
  { name: "Liquidity", value: 35, color: "#2C5282" },     
];


export default function TokenomicsChart({ activeIndex, setActiveIndex, shouldAnimate }) {
  return (
    <div className="w-full flex flex-col items-center gap-6">
      {/* Título Tokenomics */}
      <h3 className="text-4xl font-bold text-yellow-400 uppercase tracking-widest drop-shadow-sm mb-2">
        Tokenomics
      </h3>

      {/* Gráfico + Index lado a lado */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        {/* Gráfico */}
        <div className="w-full md:w-[380px] h-[380px]">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={130}
                paddingAngle={2}
                dataKey="value"
                onMouseEnter={(_, index) => setActiveIndex(index)}
                onMouseLeave={() => setActiveIndex(null)}
                isAnimationActive={shouldAnimate}
                animationDuration={700}
                stroke="#0b0b0c"
                strokeWidth={2}
                labelLine={false}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    style={{
                      transition: "all 0.3s ease",
                      transformOrigin: "center",
                      transform:
                        activeIndex === index ? "scale(1.05)" : "scale(1)",
                      filter:
                        activeIndex === index
                          ? "drop-shadow(0 0 10px rgba(255,255,255,0.2))"
                          : "none",
                    }}
                  />
                ))}
              </Pie>
              <Tooltip
                formatter={(value, name) => [`${value}%`, name]}
                contentStyle={{
                  backgroundColor: "#1f1f1f",
                  border: "1px solid #333",
                  borderRadius: "6px",
                  color: "#fff",
                  fontSize: "14px",
                }}
                itemStyle={{ color: "#fff" }}
                cursor={{ fill: "rgba(255, 255, 255, 0.05)" }}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legenda index */}
        <div className="text-left text-sm md:text-base text-white/80">
          <ul className="space-y-3">
            {data.map((item, idx) => (
              <li
                key={idx}
                className={`flex items-center gap-2 transition-all duration-300 ${
                  activeIndex === idx ? "text-yellow-400 font-semibold scale-[1.03]" : ""
                }`}
              >
                <span
                  className="w-3 h-3 rounded-full inline-block"
                  style={{ backgroundColor: item.color }}
                ></span>
                {item.name}: {item.value}%
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Total Supply */}
      <div className="mt-6 text-xs tracking-wider uppercase font-semibold text-white bg-yellow-400/10 text-yellow-100 px-4 py-2 rounded-md border border-yellow-600">
        Total Supply: 100,000,000 ESSENCE
      </div>
    </div>
  );
}
