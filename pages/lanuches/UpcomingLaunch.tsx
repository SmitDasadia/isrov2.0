import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Hero from "@/components/LaunchedCompleted/Hero";
import Info from "@/components/LaunchedCompleted/Info";
import { upcominglaunches } from "@/lib/data/UpcomingLaunches";
import ReusableHead from "@/components/Head";
import FlightEvent from "@/components/UpcomingLaunch/FlightEvent";

const Upcominglaunch = () => {
  const router = useRouter();
  const { title } = router.query;

  const LaunchDetails = upcominglaunches.find(
    (launch) => launch.title === title
  );

  useEffect(() => {
    if (!LaunchDetails) {
      router.push("/");
    }
  }, [LaunchDetails, router]);

  const missiontitle = LaunchDetails?.title || "";
  const subtitle = LaunchDetails?.subtitle || "";
  const backgroundImage = LaunchDetails?.backgroundImage || "";
  const videoLink = LaunchDetails?.videoLink || "";
  const description = LaunchDetails?.desc || "";
  const moreInfoLink = LaunchDetails?.moreInfoLink || "";
  const flightEvents = LaunchDetails?.flightEvents || [];

  return (
    <div>
      <ReusableHead title={`Isro - ${missiontitle}`} />

      <Hero
        title={missiontitle}
        backgroundImage={backgroundImage}
        subtitle={"Upcoming Launch"}
      />
      <Info
        title={missiontitle}
        description={description}
        moreInfoLink={moreInfoLink}
        videoLink={videoLink}
        subtitle={subtitle}
      />

      <FlightEvent flightEvents={flightEvents} />
    </div>
  );
};

export default Upcominglaunch;
