/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/launchers/Hero";
import Hero2 from "@/components/launchers/Hero2";
import Head from "next/head";
import OperationalRockets from "@/components/launchers/Rohini/OperationalRockets";
import { soundingRockets } from "@/lib/data/SoundingRockets";
import ReusableHead from "@/components/Head";

const SSLV = () => {
  return (
    <div>
       <ReusableHead title={"Isro - Rohini(Sounding Rockets)"} /> 
     
      <Hero backgroundImage="/Lunchers/SR.png" title="Rohini" subtitle="" />

      <Hero2 info={soundingRockets.description} />

      <OperationalRockets
        operationalRockets={soundingRockets.operationalRockets}
      />
    </div>
  );
};

export default SSLV;
