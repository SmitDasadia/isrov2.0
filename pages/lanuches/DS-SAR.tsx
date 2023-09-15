import React from "react";
import Head from "next/head";
import Hero from "@/components/LaunchedCompleted/Hero";
import Info from "@/components/LaunchedCompleted/Info";
import { lunches } from "@/lib/data/lunches";

const DSSAR = () => {
  const dsSarLunch = lunches.find((lunch) => lunch.title === "DS-SAR");

  const title = dsSarLunch?.title || "";
  const subtitle = dsSarLunch?.subtitle || "";
  const backgroundImage = dsSarLunch?.backgroundImage || "";
  const videoLink = dsSarLunch?.videoLink || "";
  const description = dsSarLunch?.desc || "";
  const moreInfoLink = dsSarLunch?.moreInfoLink || "";

  return (
    <div>
      <Head>
        <title>Isro - DS-SAR</title>
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

export default DSSAR;
