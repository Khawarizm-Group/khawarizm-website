"use client";

import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import TechMarquee from "@/components/sections/TechMarquee";
import Services from "@/components/sections/Services";
import FeaturedWork from "@/components/sections/FeaturedWork";
import CTA from "@/components/sections/CTA";
import Splash from "@/components/layout/Splash";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);

  return (
    <>
      {!splashDone && <Splash onFinish={() => setSplashDone(true)} />}

      {splashDone && <Navbar />}

      <main>
        <Hero />
        <About />
        <TechMarquee />
        <Services />
        <FeaturedWork />
        <CTA />
      </main>

      {splashDone && <Footer />}
    </>
  );
}