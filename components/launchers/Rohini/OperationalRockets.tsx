import React from "react";
import { motion } from "framer-motion";

interface OperationalRocketsProps {
  operationalRockets: {
    [rocketName: string]: {
      payload: string;
      altitude: string;
      purpose: string;
      launchPad: string;
    };
  };
}

const OperationalRockets: React.FC<OperationalRocketsProps> = ({
  operationalRockets,
}) => {
  return (
    <motion.section className="min-h-screen text-white bg-center bg-cover">
      <div className="container p-4 pt-4 flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white w-full"
        >
          <h2 className="text-3xl font-bold text-center mb-6">Operational Rockets</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr>
                  <th className="font-semibold text-lg p-3">Rocket Name</th>
                  <th className="font-semibold text-lg p-3">Payload</th>
                  <th className="font-semibold text-lg p-3">Altitude</th>
                  <th className="font-semibold text-lg p-3">Purpose</th>
                  <th className="font-semibold text-lg p-3">Launch Pad</th>
                </tr>
              </thead>
              <tbody>
                {Object.entries(operationalRockets).map(
                  ([rocketName, rocketDetails]) => (
                    <tr key={rocketName}>
                      <td className="font-semibold text-lg p-3 text-center">{rocketName}</td>
                      <td className="font-semibold text-lg p-3 text-center">
                        {rocketDetails.payload}
                      </td>
                      <td className="font-semibold text-lg p-3 text-center ">
                        {rocketDetails.altitude}
                      </td>
                      <td className="font-semibold text-lg p-3 text-center">
                        {rocketDetails.purpose}
                      </td>
                      <td className="font-semibold text-lg p-3 text-center">
                        {rocketDetails.launchPad}
                      </td>
                    </tr>
                  )
                )}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default OperationalRockets;
