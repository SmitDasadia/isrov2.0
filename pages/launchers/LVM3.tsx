/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/launchers/Hero";
import Head from "next/head";

const LVM3 = () => {
  return (
    <div>
      <Head>
        <title>Isro - LVM3</title>
      </Head>
      <Hero
        backgroundImage="/Lunchers/LVM3BG2.png"
        title="LVM3"
        subtitle=""
      />
    </div>
  );
};

export default LVM3;
