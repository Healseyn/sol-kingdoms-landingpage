"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "@/styles/sections/Sections.module.css";

const faqItems = [
  {
    question: "What is Sol Kingdoms?",
    answer:
      "Sol Kingdoms is a real-time strategy MMO on the Solana blockchain, where players build cities, train armies, and fight for dominance in a cyclical world that resets every 30 days.",
  },
  {
    question: "What is $ESSENCE?",
    answer:
      "$ESSENCE is the core token of Sol Kingdoms, earned through gameplay and stored in the Royal City. It will be launched on pump.fun after the game is fully complete.",
  },
  {
    question: "When will the token launch?",
    answer:
      "The $ESSENCE token will launch on pump.fun after the game development is complete and fully tested. We're focusing on delivering a polished gaming experience first.",
  },
  {
    question: "How can I play the game now?",
    answer:
      "You can play the beta version at beta-play.solkingdoms.xyz and join our Discord community to follow development progress and provide feedback.",
  },
  {
    question: "What happens after a wipe?",
    answer:
      "All cities are destroyed after each 30-day season. However, anything stored in the Royal City — including resources and future $ESSENCE — is preserved.",
  },
  {
    question: "How will I earn $ESSENCE?",
    answer:
      "Once launched, $ESSENCE will be earned through skilled gameplay, contributing to the Royal City, winning battles, and participating in seasonal competitions.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-yellow-400 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border border-yellow-800 bg-[#141414] rounded-xl p-5 transition-all duration-300"
            >
              <button
                onClick={() => toggleIndex(index)}
                className="flex items-center justify-between w-full text-left"
              >
                <h3 className="text-lg font-semibold text-yellow-300">
                  {item.question}
                </h3>
                <span className="text-yellow-500 text-xl">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-4 text-sm text-white/80">{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}