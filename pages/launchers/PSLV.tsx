/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/launchers/Hero";
import Head from "next/head";

const PSLV = () => {
  return (
    <div>
      <Head>
        <title>Isro - PSLV</title>
      </Head>
      <Hero
        backgroundImage="/Lunchers/PSLVBG3.png"  
        title="PSLV"
        subtitle=""
      />
    </div>
  );
};

export default PSLV;
