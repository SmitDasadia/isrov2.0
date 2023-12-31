/* eslint-disable @next/next/no-img-element */
import Hero from "@/components/Launches/Hero";
import Head from "next/head";
import { lunchers } from "@/lib/data/lunchers";
import LaunchVehicles from "@/components/launchers/LaunchVehicles";
import ReusableHead from "@/components/Head";

const Launchers = () => {
  return (
    <div>
     
      <ReusableHead title={"Isro - Launchers"} /> 
        

      
      <Hero backgroundImage="/Lunchers/lunchers.png" title="Launchers" subtitle={""} />

      <div className="pt-5 p-5">
        {Object.values(lunchers.operational).map((vehicle,index) => (
          <LaunchVehicles
            key={vehicle.name}
            name={vehicle.name}
            description={vehicle.description}
            img={vehicle.img}
            path={vehicle.path}
            alignment={index % 2 === 0 ? "left" : "right"}
          />
        ))}
        </div>
    </div>
  );
};

export default Launchers;
