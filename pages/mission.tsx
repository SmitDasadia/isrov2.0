/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Link from "next/link";
import { motion } from "framer-motion";
import Hero from "@/components/Launches/Hero";
import Image from "next/image";

import { spaceProgram } from "@/lib/data/SpaceProgram";

const Mission = () => {
  return (
    <div>
      <Head>
        <title>Isro - Mission</title>
        <link rel="icon" href="/Isro.png" sizes="any" />
      </Head>
      <Hero
        backgroundImage="/mission/missionbg.png"
        title=""
        subtitle={spaceProgram.vision}
      />
    </div>
  );
};

export default Mission;
