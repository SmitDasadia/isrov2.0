import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // Make sure to import the Footer component
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <main className="bg-black">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  );
}
