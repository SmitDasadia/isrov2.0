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
        title="Space Tech Serving Humanity"
      />

      <UpcommingLaunch
        backgroundImageUrl={"/UpcommingLaunch/TV-D1-1.png"}
        title={"Upcomming Launch"}
        subtitle={"GAGANYAAN TEST VEHICLE TV-D1"}
        buttonText={"More Info"}
        buttonLink={"/lanuches/UpcomingLaunch?title=GAGANYAAN-TV-D1"} launchDateTime={launchDateTime}        
      />

      <ReusableHeroSection
        backgroundImageUrl="/LaunchCompleted/Aditya_L1Lunch1.jpg"
        title="Recent Launch"
        subtitle="ADITYA-L1"
        buttonText="More Info"
        buttonLink="/lanuches/LaunchDetails?title=Aditya-L1"
      />
      <ReusableHeroSection
        backgroundImageUrl="/LaunchCompleted/DS-SAR-Launch.png"
        title="Launch Compelted"
        subtitle="DS-SAR"
        buttonText="More Info"
        buttonLink="/lanuches/LaunchDetails?title=DS-SAR"
      />
      <ReusableHeroSection
        backgroundImageUrl="/LaunchCompleted/chandrayann3Lunch4.png"
        title="Launch Compelted"
        subtitle="Chandrayaan-3"
        buttonText="More Info"
        buttonLink="/lanuches/LaunchDetails?title=Chandrayaan-3"
      />
    </main>
  );
}
