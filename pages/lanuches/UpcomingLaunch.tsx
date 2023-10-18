import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Hero from "@/components/LaunchedCompleted/Hero";
import Info from "@/components/LaunchedCompleted/Info";
import { upcominglaunches } from "@/lib/data/UpcomingLaunches";
import ReusableHead from "@/components/Head";

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

      <div className=" p-10 text-white">
        <h1 className="text-3xl sm:text-5xl font-bold mb-8 text-center">
          Flight Events
        </h1>
        <table className="w-full ">
          <thead>
            <tr className="text-sm sm:text-xl font-bold text-white">
              <th className="p-2">Event</th>
              <th className="p-2">Time (s)</th>
              <th className="p-2">Altitude (km)</th>
              <th className="p-2">Relative Velocity (m/s)</th>
            </tr>
          </thead>
          <tbody>
            {flightEvents.map((event, index) => (
              <tr key={index} className="text-white font-semibold ">
                <td className="p-4 border-b-[0.2px]">{event.event}</td>
                <td className="p-4 border-b-[0.2px]">{event.time}</td>
                <td className="p-4 border-b-[0.2px]">{event.altitude} km</td>
                <td className="p-4 border-b-[0.2px]">{event.velocity} m/s</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Upcominglaunch;
