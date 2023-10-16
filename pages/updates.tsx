/* eslint-disable @next/next/no-img-element */
import Head from "next/head";
import Hero from "@/components/Launches/Hero";
import Update from "@/components/Updates";
import { updates } from "@/lib/data/Updates";
const Updates = () => {
  return (
    <>
      <section>
        <Head>
          <title>Isro - Updates</title>
          <link rel="icon" href="/Isro.png" sizes="any" />
        </Head>

        <Hero
          backgroundImage="/Updates/Updates.png"
          title="Updates"
          subtitle=""
        />

       
      </section>
    </>
  );
};

export default Updates;
