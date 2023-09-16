/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/launchers/Hero";
import Hero2 from "@/components/launchers/Hero2";
import Head from "next/head";
import {pslv} from "@/lib/data/PSLV"
const PSLV = () => {
  return (
    <div>
      <Head>
        <title>Isro - PSLV</title>
      </Head>
      <Hero
        // backgroundImage="/Lunchers/PSLVBG3.png"  
        backgroundImage="/Lunchers/PSLVBG3.png"  
        title="PSLV"
        subtitle="The Workhorse of ISRO"
      />

      <Hero2 backgroundImage=""  
       
       info={pslv.desc}/>
    </div>
  );
};

export default PSLV;
