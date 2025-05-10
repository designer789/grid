"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import GetStarted from "@/components/GetStarted";
import GridEcosystem from "@/components/GridEcosystem";
import Tokenomics from "@/components/Tokenomics";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <Header />
      
      <ScrollReveal>
        <Hero />
      </ScrollReveal>
      
      <section id="features">
        <ScrollReveal direction="up" threshold={0.15}>
          <Features />
        </ScrollReveal>
      </section>
      
      <section id="get-started">
        <ScrollReveal direction="left" threshold={0.15}>
          <GetStarted />
        </ScrollReveal>
      </section>
      
      <section id="ecosystem">
        <ScrollReveal direction="right" threshold={0.15}>
          <GridEcosystem />
        </ScrollReveal>
      </section>
      
      <section id="tokenomics">
        <ScrollReveal direction="up" distance={40} threshold={0.15}>
          <Tokenomics />
        </ScrollReveal>
      </section>
      
      <section id="roadmap">
        <ScrollReveal direction="left" duration={0.8} threshold={0.15}>
          <Roadmap />
        </ScrollReveal>
      </section>
      
      <section id="faq">
        <ScrollReveal direction="up" distance={25} threshold={0.15}>
          <FAQ />
        </ScrollReveal>
      </section>
      
      <ScrollReveal direction="up" distance={20} threshold={0.1}>
        <Footer />
      </ScrollReveal>
    </main>
  );
}
