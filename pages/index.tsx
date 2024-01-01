"use client";

import ReusableHeroSection from "@/components/Hero";
import Mainhero from "@/components/Mainhero";
import ReusableHead from "@/components/Head";

export default function Home() {

  return (
    <main>
      <ReusableHead title={"Indian Space Research Organisation"} />

      <Mainhero
        backgroundImageUrl="/lunches/bg6.png"
        title="Space Tech"
        title2="Serving Humanity"
      />

      <ReusableHeroSection
        backgroundImageUrl="/LaunchCompleted/XPoSat.png"
        title="Recent Launch"
        subtitle="XPoSat Mission"
        buttonText="REWATCH"
        buttonLink="/lanuches/LaunchDetails?title=XPoSat"
      />

      <ReusableHeroSection
        backgroundImageUrl="/LaunchCompleted/TV-D1.png"
        title="Recent Launch"
        subtitle="Gaganyaan TV-D1"
        buttonText="REWATCH"
        buttonLink="/lanuches/LaunchDetails?title=GAGANYAAN-TV-D1"
      />

      <ReusableHeroSection
        backgroundImageUrl="/LaunchCompleted/Aditya_L1Lunch1.png"
        title="Recent Launch"
        subtitle="ADITYA-L1"
        buttonText="REWATCH"
        buttonLink="/lanuches/LaunchDetails?title=Aditya-L1"
      />
    </main>
  );
}
