"use client";
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Head from 'next/head'
import ReusableHeroSection from '@/components/Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (

    <main
    >
      <Head>
        <title>Isro</title>
      </Head>
      <ReusableHeroSection
        backgroundImageUrl="/AdityaL1/Aditya_L1Lunch1.jpg"
        title="Recent Launch"
        subtitle="ADITYA-L1"
        buttonText="More Info"
        buttonLink="/lanuches/Adityal1"
      />
      <ReusableHeroSection
        backgroundImageUrl="/Chandrayaan3/chandrayann3lunch2.png"
        title="Launch Compelted"
        subtitle="Chandrayaan-3"
        buttonText="More Info"
        buttonLink="/lanuches/Chandrayaan3"
      />
    </main>
  )
}
