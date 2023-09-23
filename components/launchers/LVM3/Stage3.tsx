import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Stage3 {
  stageName: string;
  backgroundImage: string;
  launcher: string;
  Height: string;
  Diameter: string;
  EmptyMass: string;
  GrossMass: string;
  PropellantMass: string;
  PoweredBy: string;
  MaximumThrust: string;
  SpecificImpulse: string[];
  BurnTime: string;
  Propellant: string;
}

const Stage3: React.FC<Stage3> = ({
  stageName,
  backgroundImage,
  launcher,
  Height,
  Diameter,
  EmptyMass,
  GrossMass,
  PropellantMass,
  PoweredBy,
  MaximumThrust,
  SpecificImpulse,
  BurnTime,
  Propellant,
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
                <h2 className="text-5xl font-bold">{stageName}</h2>

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
                    {EmptyMass.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">
                          Empty Mass
                        </td>
                        <td className="font-semibold text-lg p-3">
                          {EmptyMass}
                        </td>
                      </tr>
                    )}
                    {GrossMass.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">
                          Gross Mass
                        </td>
                        <td className="font-semibold text-lg p-3">
                          {GrossMass}
                        </td>
                      </tr>
                    )}
                    {PropellantMass.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">
                          Propellant Mass
                        </td>
                        <td className="font-semibold text-lg p-3">
                          {PropellantMass}
                        </td>
                      </tr>
                    )}
                    {PoweredBy.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">
                          Powered By
                        </td>
                        <td className="font-semibold text-lg p-3">
                          {PoweredBy}
                        </td>
                      </tr>
                    )}
                    {MaximumThrust.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">
                          Maximum Thrust
                        </td>
                        <td className="font-semibold text-lg p-3">
                          {MaximumThrust}
                        </td>
                      </tr>
                    )}
                    {SpecificImpulse.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">
                          Specific Impulse
                        </td>
                        <td className="font-semibold text-lg p-3">
                          {SpecificImpulse}
                        </td>
                      </tr>
                    )}
                    {BurnTime.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">Burn Time</td>
                        <td className="font-semibold text-lg p-3">
                          {BurnTime}
                        </td>
                      </tr>
                    )}
                    {Propellant.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">
                          Propellant
                        </td>
                        <td className="font-semibold text-lg p-3">
                          {Propellant}
                        </td>
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

export default Stage3;
