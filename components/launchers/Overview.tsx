/* eslint-disable @next/next/no-img-element */
import React from "react";
import { motion } from "framer-motion";

interface OverviewProps {
  backgroundImage: string;
  launcher: string;
  Height: string;
  Diameter: string;
  Mass: string;
  Stages: number;
  Varients: string;
  LEO: string;
  SSO: string;
  SUBGTO: string;
  GTO: string;
}

const Overview: React.FC<OverviewProps> = ({
  backgroundImage,
  launcher,
  Height,
  Diameter,
  Mass,
  Stages,
  LEO,
  SSO,
  SUBGTO,
  GTO,
  Varients,
}) => {
  return (
    <motion.section
      className="min-h-screen  text-white bg-center bg-cover"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="container p-2 pt-2 flex justify-start items-start">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white p-10  w-full lg:w-2/3 "
        >
          <h2 className="text-2xl font-semibold text-slate-300">{launcher}</h2>
          <h2 className="text-5xl font-bold">Overview</h2>

          <table className="w-full mt-4">
            <tbody>
              <tr>
                <td className="font-semibold text-lg p-3">Height</td>
                <td className="font-semibold text-lg p-3">{Height}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg p-3">Diameter</td>
                <td className="font-semibold text-lg p-3">{Diameter}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg p-3">Mass</td>
                <td className="font-semibold text-lg p-3">{Mass}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg p-3">Varients</td>
                <td className="font-semibold text-lg p-3">{Varients}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg p-3">Payload to LEO</td>
                <td className="font-semibold text-lg p-3">{LEO}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg p-3">Payload to SSO</td>
                <td className="font-semibold text-lg p-3">{SSO}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg p-3">
                  Payload to SUB-GTO
                </td>
                <td className="font-semibold text-lg p-3">{SUBGTO}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg p-3">Payload to GTO</td>
                <td className="font-semibold text-lg p-3">{GTO}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg p-3">Stages</td>
                <td className="font-semibold text-lg p-3">{Stages}</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Overview;
