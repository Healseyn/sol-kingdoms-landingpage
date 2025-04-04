import Head from "next/head";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import WipeCycle from "@/components/WipeCycle";
import Resources from "@/components/Resources";
import TokenomicsSection from "@/components/Tokenomics";
import RoadmapSection from "@/components/Roadmap";
import FAQSection from "@/components/FAQ";
import Footer from "@/components/Footer";






export default function Home() {
  return (
    <>
      <Head>
        <title>Sol Kingdoms – Web3 strategy citybuild mmo</title>
        <meta name="description" content="Build your kingdom, survive the storm, and earn Essence on Solana. Play the next-gen strategy game in cycles of conquest and glory." />
        <meta name="keywords" content="Sol Kingdoms, blockchain game, play to earn, Solana, essence token, survival strategy, web3, crypto game, colonize, Solana game" />
        <meta name="author" content="Sol Kingdoms" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Sol Kingdoms – Build. Survive. Earn." />
        <meta property="og:description" content="Conquer the world in cycles. Earn $ESSENCE and keep your progress every season." />
        <meta property="og:image" content="/images/og-banner.jpg" />
        <meta property="og:url" content="https://www.solkingdoms.xyz" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="apple-mobile-web-app-title" content="Sol Kingdoms" />


      </Head>


      <main className="min-h-screen bg-[#0d0d0d] text-white">
        <Header />
        <div className="border-t border-yellow-800 opacity-30" />
        <Intro />
        <div className="border-t border-yellow-800 opacity-30" />
        <WipeCycle />
        <div className="border-t border-yellow-800 opacity-30" />
        <Resources />
        <div className="border-t border-yellow-800 opacity-30" />
        <TokenomicsSection />
        <div className="border-t border-yellow-800 opacity-30" />
        <Resources />
        <div className="border-t border-yellow-800 opacity-30" />
        <div className="overflow-x-auto scrollbar-thin">

          <RoadmapSection />
          <div className="border-t border-yellow-800 opacity-30" />
          <FAQSection />
          <Footer />
        </div>

      </main>
    </>
  );
}
