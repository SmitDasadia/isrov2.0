import React from "react";
import { useRouter } from "next/router";
import Hero from "@/components/LaunchedCompleted/Hero";
import Info from "@/components/LaunchedCompleted/Info";
import { upcominglaunches } from "@/lib/data/UpcomingLaunches";
import ReusableHead from "@/components/Head";
import FlightEvent from "@/components/UpcomingLaunch/FlightEvent";

const UpcomingLaunch = () => {
  const router = useRouter();
  const { title } = router.query;

  const UpcomingLaunch = upcominglaunches.find(
    (lunch: any) => lunch.title === title
  );

  if (!UpcomingLaunch) {
    return <div>Launch details not found.</div>;
  }

  const missiontitle = UpcomingLaunch?.title || "";
  const subtitle = UpcomingLaunch?.subtitle || "";
  const backgroundImage = UpcomingLaunch?.backgroundImage || "";
  const videoLink = UpcomingLaunch?.videoLink || "";
  const description = UpcomingLaunch?.desc || "";
  const moreInfoLink = UpcomingLaunch?.moreInfoLink || "";

  return (
    <section>
      <ReusableHead title={`Isro - ${missiontitle}`} />

      <Hero
        title={subtitle}
        backgroundImage={backgroundImage}
        subtitle={"UPCOMING LAUNCH"}
      />
      <Info
        title={missiontitle}
        description={description}
        moreInfoLink={moreInfoLink}
        videoLink={videoLink}
        subtitle={subtitle}
      />
    </section>
  );
};

export default UpcomingLaunch;
