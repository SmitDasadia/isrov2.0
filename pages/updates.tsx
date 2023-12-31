/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Hero from "@/components/Launches/Hero";
import Update from "@/components/Updates";
import { updates } from "@/lib/data/Updates";
import ReusableHead from "@/components/Head";
const Updates = () => {
  return (
    <>
      <section>
      <ReusableHead title={"Isro - Updates"} /> 
       

        <Hero
          backgroundImage="/Updates/Updates.png"
          title="Updates"
          subtitle=""
        />

        <div className="p-4">
          <div className="container mx-auto grid gap-4 grid-cols-1  p-2">
            {updates.map((item) => (
              <Update
                key={item.name}
                image={item.image}
                title={item.name}
                subtitle={item.qualificationDate}
                desc={item.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Updates;
