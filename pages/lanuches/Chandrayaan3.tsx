import React from "react";
import Head from "next/head";
import Hero from "@/components/LaunchedCompleted/Hero";
import Info from "@/components/LaunchedCompleted/Info";
import { lunches } from "@/lib/data/lunches";

const Chandrayaan3 = () => {
  const Chandrayaan3Lunch = lunches.find(
    (lunch) => lunch.title === "Chandrayaan-3"
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
        <title>Isro - Chandrayaan-3</title>
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

export default Chandrayaan3;
