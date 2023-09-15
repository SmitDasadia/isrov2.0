/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/launchers/Hero";
import Head from "next/head";

const SoundingRockets = () => {
  return (
    <div>
      <Head>
        <title>Isro - Sounding Rockets</title>
      </Head>
      <Hero
        backgroundImage="/Lunchers/SR.png"
        title="Rohini"
        subtitle=""
      />
    </div>
  );
};

export default SoundingRockets;
