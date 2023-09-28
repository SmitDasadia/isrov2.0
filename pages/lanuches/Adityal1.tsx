import React from "react";
import Head from "next/head";
import Hero from "@/components/LaunchedCompleted/Hero";
import Info from "@/components/LaunchedCompleted/Info";
import { lunches } from "@/lib/data/lunches";

const Chandrayaan3 = () => {
  const Chandrayaan3Lunch = lunches.find(
    (lunch) => lunch.title === "Aditya-L1"
  );

  const title = Chandrayaan3Lunch?.title || "";
  const subtitle = Chandrayaan3Lunch?.subtitle || "";
  const backgroundImage = Chandrayaan3Lunch?.backgroundImage || "";
  const videoLink = Chandrayaan3Lunch?.videoLink || "";
  const description = Chandrayaan3Lunch?.desc || "";
  const moreInfoLink = Chandrayaan3Lunch?.moreInfoLink || "";

  return (
    <div>
      <Head>
        <title>Isro - Aditya-L1</title>
        <link rel="icon" href="/Isro.png" sizes="any" />
      </Head>
      <Hero
        title={title}
        backgroundImage={backgroundImage}
        subtitle={"Recent Launched"}
      />
      <Info
        title={title}
        description={description}
        moreInfoLink={moreInfoLink}
        videoLink={videoLink}
        subtitle={subtitle}
      />
    </div>
  );
};

export default Chandrayaan3;
