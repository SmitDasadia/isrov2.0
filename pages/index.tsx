"use client";
import { Inter } from "next/font/google";
import ReusableHeroSection from "@/components/Hero";
import Mainhero from "@/components/Mainhero";
import ReusableHead from "@/components/Head";
import UpcommingLaunch from "@/components/UpcomingLaunch";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // Example launch date and time (replace with your actual launch date and time)
  const launchDateTime = new Date("2023-10-21T08:00:00");

  return (
    <main>
      <ReusableHead title={"Indian Space Research Organisation"} />

      <Mainhero
        backgroundImageUrl="/lunches/bg6.png"
        title="Space Tech"
        title2="Serving Humanity"
      />

      <ReusableHeroSection
        backgroundImageUrl="/UpcommingLaunch/xposat.png"
        title="Upcomming Launch"
        subtitle="XPoSat Mission"
        buttonText="Watch Now"
        buttonLink="/lanuches/UpcomingLaunch?title=XPoSat"
      />

      <ReusableHeroSection
        backgroundImageUrl="/LaunchCompleted/TV-D1.png"
        title="Recent Launch"
        subtitle="Gaganyaan TV-D1"
        buttonText="More Info"
        buttonLink="/lanuches/LaunchDetails?title=GAGANYAAN-TV-D1"
      />

      <ReusableHeroSection
        backgroundImageUrl="/LaunchCompleted/Aditya_L1Lunch1.png"
        title="Recent Launch"
        subtitle="ADITYA-L1"
        buttonText="More Info"
        buttonLink="/lanuches/LaunchDetails?title=Aditya-L1"
      />
    </main>
  );
}
