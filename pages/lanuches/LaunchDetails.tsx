import React from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Hero from "@/components/LaunchedCompleted/Hero";
import Info from "@/components/LaunchedCompleted/Info";
import { lunches } from "@/lib/data/lunches";
import ReusableHead from "@/components/Head";

const LaunchDetails = () => {
  const router = useRouter();
  const { title } = router.query;

  const LaunchDetails = lunches.find((lunch) => lunch.title === title);

  if (!LaunchDetails) {
    return <div>Launch details not found.</div>;
  }

  const missiontitle = LaunchDetails?.title || "";
  const subtitle = LaunchDetails?.subtitle || "";
  const backgroundImage = LaunchDetails?.backgroundImage || "";
  const videoLink = LaunchDetails?.videoLink || "";
  const description = LaunchDetails?.desc || "";
  const moreInfoLink = LaunchDetails?.moreInfoLink || "";

  return (
    <div>
       <ReusableHead title={`Isro - ${missiontitle}`} /> 
     
      <Hero
        title={missiontitle}
        backgroundImage={backgroundImage}
        subtitle={"Launched"}
      />
      <Info
        title={missiontitle}
        description={description}
        moreInfoLink={moreInfoLink}
        videoLink={videoLink}
        subtitle={subtitle}
      />
    </div>
  );
};

export default LaunchDetails;
