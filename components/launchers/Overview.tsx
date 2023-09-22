/* eslint-disable @next/next/no-img-element */
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

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
  const isRightAligned = "right";
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -50 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen flex justify-center items-center text-white p-2"
      >
        <div className="container mx-auto text-center">
          <motion.div
            className="mb-4 text-center "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <div
              className={`flex flex-col p-2 ${
                isRightAligned
                  ? "lg:flex-row-reverse text-left item-start"
                  : "lg:flex-row text-left"
              }`}
            >
              {/* On small devices, show image first */}
              <div className="w-full lg:w-1/2 p-2 flex justify-center items-center">
                <Image
                  src={backgroundImage}
                  alt={launcher}
                  width={600} // Set the width according to your design
                  height={400} // Set the height according to your design
                  layout="responsive"
                  objectFit="cover"
                />
              </div>

              {/* On small devices, show data second */}
              <div className="text-white p-10 w-full lg:w-2/3 ">
                <h2 className="text-2xl font-semibold text-slate-300">
                  {launcher}
                </h2>
                <h2 className="text-5xl font-bold">Overview</h2>

                <table className="w-full mt-4">
                  <tbody>
                    {Height.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">Height</td>
                        <td className="font-semibold text-lg p-3">{Height}</td>
                      </tr>
                    )}
                    {Diameter.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">Diameter</td>
                        <td className="font-semibold text-lg p-3">
                          {Diameter}
                        </td>
                      </tr>
                    )}
                    {Mass.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">Mass</td>
                        <td className="font-semibold text-lg p-3">{Mass}</td>
                      </tr>
                    )}
                    {Varients.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">Variants</td>
                        <td className="font-semibold text-lg p-3">
                          {Varients}
                        </td>
                      </tr>
                    )}
                    {LEO.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">
                          Payload to LEO
                        </td>
                        <td className="font-semibold text-lg p-3">{LEO}</td>
                      </tr>
                    )}
                    {SSO.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">
                          Payload to SSO
                        </td>
                        <td className="font-semibold text-lg p-3">{SSO}</td>
                      </tr>
                    )}
                    {SUBGTO.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">
                          Payload to SUB-GTO
                        </td>
                        <td className="font-semibold text-lg p-3">{SUBGTO}</td>
                      </tr>
                    )}
                    {GTO.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">
                          Payload to GTO
                        </td>
                        <td className="font-semibold text-lg p-3">{GTO}</td>
                      </tr>
                    )}
                    {Stages > 0 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">Stages</td>
                        <td className="font-semibold text-lg p-3">{Stages}</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Overview;
