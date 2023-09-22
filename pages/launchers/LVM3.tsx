/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/launchers/Hero";
import Hero2 from "@/components/launchers/Hero2";
import Head from "next/head";
import Overview from "@/components/launchers/Overview";
import LaunchStats from "@/components/launchers/LaunchStats";
import ReusableSlider from "@/components/launchers/Silder";
import Stage1 from "@/components/launchers/LVM3/Stage1";
import Stage2 from "@/components/launchers/LVM3/Stage2";
import Stage3 from "@/components/launchers/LVM3/Stage3";
import { lvm3 } from "@/lib/data/LVM3";
import VideoHero from "@/components/VideoHero";
const LVM3 = () => {
  const items = [
    <Overview
      key={lvm3.launcher}
      backgroundImage=""
      launcher={lvm3.launcher}
      Height={lvm3.Size.Height}
      Diameter={lvm3.Size.Diameter}
      Mass={lvm3.Size.Mass}
      Stages={lvm3.Size.Stages}
      LEO={lvm3.Capacity.PayloadToLEO.Mass}
      SSO={lvm3.Capacity.PayloadToGTO.Mass}
      Varients={""}
      SUBGTO={""}
      GTO={""}
    />,
    <Stage1
      key={lvm3.launcher}
      backgroundImage={""}
      launcher={lvm3.launcher}
      stageName={"First Stage – S200 Boosters"}
      Height={lvm3.FirstStage.S200Boosters.Height}
      Diameter={lvm3.FirstStage.S200Boosters.Diameter}
      PropellantMass={lvm3.FirstStage.S200Boosters.PropellantMass}
      PoweredBy={lvm3.FirstStage.S200Boosters.PoweredBy}
      MaximumThrust={lvm3.FirstStage.S200Boosters.MaximumThrust}
      BurnTime={lvm3.FirstStage.S200Boosters.BurnTime}
      Propellant={lvm3.FirstStage.S200Boosters.Propellant}
      SpecificImpulse={lvm3.FirstStage.S200Boosters.SpecificImpulse}
    />,
    <Stage2
      key={lvm3.launcher}
      backgroundImage={""}
      launcher={lvm3.launcher}
      stageName={"Second Stage – L110"}
      Height={lvm3.SecondStage.L110.Height}
      Diameter={lvm3.SecondStage.L110.Diameter}
      PropellantMass={lvm3.SecondStage.L110.PropellantMass}
      PoweredBy={lvm3.SecondStage.L110.PoweredBy}
      MaximumThrust={lvm3.SecondStage.L110.MaximumThrust}
      BurnTime={lvm3.SecondStage.L110.BurnTime}
      Propellant={lvm3.SecondStage.L110.Propellant}
      SpecificImpulse={lvm3.SecondStage.L110.SpecificImpulse}
      EmptyMass={""}
      GrossMass={""}
    />,<Stage3
      key={lvm3.launcher}
      backgroundImage={""}
      launcher={lvm3.launcher}
      stageName={"Third Stage – C25"}
      Height={lvm3.SecondStage.L110.Height}
      Diameter={lvm3.SecondStage.L110.Diameter}
      PropellantMass={lvm3.SecondStage.L110.PropellantMass}
      PoweredBy={lvm3.SecondStage.L110.PoweredBy}
      MaximumThrust={lvm3.SecondStage.L110.MaximumThrust}
      BurnTime={lvm3.SecondStage.L110.BurnTime}
      Propellant={lvm3.SecondStage.L110.Propellant}
      SpecificImpulse={lvm3.SecondStage.L110.SpecificImpulse}
      EmptyMass={""}
      GrossMass={""}
    />,
  ];
  return (
    <div>
      <Head>
        <title>Isro - LVM3</title>
        <link rel="icon" href="/Isro.png" sizes="any" />

      </Head>
      <Hero
        backgroundImage="/Lunchers/LVM3BG2.png"
        title="LVM3"
        subtitle="The Space Elephant"
      />

      <LaunchStats data={lvm3.LaunchStatistics} />
      <Hero2  info={lvm3.desc} />

      <ReusableSlider items={items} />
      <VideoHero backgroundImageUrl={"/Lunchers/LVM3LAUNCH.png"} title={"Video"} subtitle={"LVM3 LAUNCH"} buttonText={"Watch Now"} buttonLink={"https://www.isro.gov.in/LVM3_M2_Liftoff_cameraview.html"}/>
    </div>
  );
};

export default LVM3;
