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
        <link rel="icon" href="/Isro.png" sizes="any" />
      </Head>
      <ReusableHeroSection
        backgroundImageUrl="https://www.isro.gov.in/media_isro/image/index/PSLVC55/PSLVC55_gallery/post_launch/SB3_8531.jpg.webp"
        title="Recent Launch"
        subtitle="ADITYA-L1"
        buttonText="More Info"
        buttonLink="/lanuches/Adityal1"
      />
        <ReusableHeroSection
        backgroundImageUrl="/DS-SAR/DS-SARBG4.png"
        title="Launch Compelted"
        subtitle="DS-SAR"
        buttonText="More Info"
        buttonLink="/lanuches/DS-SAR"
      />
      <ReusableHeroSection
        backgroundImageUrl="/Chandrayaan3/chandrayann3Lunch4.png"
        title="Launch Compelted"
        subtitle="Chandrayaan-3"
        buttonText="More Info"
        buttonLink="/lanuches/Chandrayaan3"
      />
    </main>
  )
}
