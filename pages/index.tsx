"use client";
import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import ReusableHeroSection from "@/components/Hero";
import Mainhero from "@/components/Mainhero";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Head>
        <title>Indian Space Research Organisation</title>
        <link rel="icon" href="/Isro.png" sizes="any" />
      </Head>
      <Mainhero
        backgroundImageUrl="/lunches/bg6.png"
        title="Space Tech Serving Humanity"
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
