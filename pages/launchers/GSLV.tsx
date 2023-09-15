/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/launchers/Hero";
import Head from "next/head";

const GSLV = () => {
  return (
    <div>
      <Head>
        <title>Isro - GSLV</title>
      </Head>
      <Hero
        backgroundImage="/Lunchers/GSLVBG3.png"
        title="GSVL"
        subtitle=""
      />
    </div>
  );
};

export default GSLV;
