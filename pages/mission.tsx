/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Launches/Hero";
import { spaceProgram } from "@/lib/data/SpaceProgram";
import MissionHero from "@/components/Mission/MissionHero";

const Mission = () => {
  return (
    <>
      <section>
        <Head>
          <title>Isro - Mission</title>
          <link rel="icon" href="/Isro.png" sizes="any" />
        </Head>

        <Hero
          backgroundImage="/mission/missionbackground.png"
          title=""
          subtitle={spaceProgram.vision}
        />

        <MissionHero backgroundImage="/mission/launch.png"
          title=""
          subtitle={spaceProgram.mission1}    
          alignment="left"  
        />

<MissionHero backgroundImage="/mission/remote.png"
          title=""
          subtitle={spaceProgram.mission2} 
          alignment="right"   
        />

<MissionHero backgroundImage="/mission/moonlander.png"
          title=""
          subtitle={spaceProgram.mission3} 
          alignment="left"   
        />
      </section>
    </>
  );
};

export default Mission;
