import ReusableHead from "@/components/Head";
import Hero from "@/components/launchers/Hero";
import React from "react";
import { gaganyaan } from "@/lib/data/Gaganyann";
import Info from "@/components/Gaganyann/Info";
import LaunchVehicles from "@/components/launchers/LaunchVehicles";

const Gaganyaan = () => {
  return (
    <>
      <section>
        <ReusableHead title={"Isro - Gaganyaan"} />

        <Hero
          backgroundImage="/Gaganyaan/earth.png"
          title="Gaganyaan"
          subtitle="Pioneering Human Spaceflight"
        />

        <Info
          isBgImg={false}
          backgroundImage=""
          title=""
          desc={gaganyaan.description}
        />

        <LaunchVehicles
          name={"Human rated LVM3 - HLVM3"}
          description={
            "LVM3 rocket - The well proven and reliable heavy lift launcher of ISRO, is identified as the launch vehicle for Gaganyaan mission. It consists of solid stage, liquid stage and cryogenic stage. All systems in LVM3 launch vehicle are re-configured to meet human rating requirements and christened Human Rated LVM3. HLVM3 will be capable of launching the Orbital Module to an intended Low Earth Orbit of 400 km."
          }
          img={""}
          path={"#"}
          alignment={"right"}
        />
      </section>
    </>
  );
};

export default Gaganyaan;
