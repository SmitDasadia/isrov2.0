/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/launchers/Hero";
import Hero2 from "@/components/launchers/Hero2";
import Head from "next/head";
import { sslv } from "@/lib/data/sslv";
import { soundingRockets } from "@/lib/data/soundingRockets";
import Overview from "@/components/launchers/Overview";
import OperationalRockets from "@/components/launchers/Rohini/OperationalRockets";

const SSLV = () => {
  
  return (
    <div>
      <Head>
        <title>Isro - Rohini(Sounding Rockets)</title>
      </Head>
      <Hero
        backgroundImage="/Lunchers/SR.png"
        title="Rohini"
        subtitle=""
      />

      <Hero2 backgroundImage="" info={soundingRockets.description} />

      <OperationalRockets
        operationalRockets={soundingRockets.operationalRockets}
      />

     
    </div>
  );
};

export default SSLV;
