import React from "react";
import Head from "next/head";
import Hero from "@/components/LaunchedCompleted/Hero";
import Info from "@/components/LaunchedCompleted/Info";
import { lunches } from "@/lib/data/lunches";

const NVS01 = () => {
  const NVS01Lunch = lunches.find((lunch) => lunch.title === "NVS-01");

  const title = NVS01Lunch?.title || "";
  const subtitle = NVS01Lunch?.subtitle || "";
  const backgroundImage = NVS01Lunch?.backgroundImage || "";
  const videoLink = NVS01Lunch?.videoLink || "";
  const description = NVS01Lunch?.desc || "";
  const moreInfoLink = NVS01Lunch?.moreInfoLink || "";

  return (
    <div>
      <Head>
        <title>Isro - NVS-01</title>
        <link rel="icon" href="/Isro.png" sizes="any" />

      </Head>
      <Hero
        title={title}
        subtitle={subtitle}
        backgroundImage={backgroundImage}
        videoLink={videoLink}
      />
      <Info
        title={title}
        description={description}
        moreInfoLink={moreInfoLink}
      />
    </div>
  );
};

export default NVS01;
