import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

interface Stage2Props {
  backgroundImage: string;
  stageName: string;
  launcher: string;
  Weight: string;
  Diameter: string;
  Height: string;
  Construction: string;
  Material: string;
  SeparationMechanisms: string;
  AcousticProtection: string;
}

const PayloadFairing: React.FC<Stage2Props> = ({
  backgroundImage,
  launcher,
  Height,
  Diameter,
  Construction,
  Material,
  SeparationMechanisms,
  AcousticProtection,
  Weight,
  stageName,
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
                    {Weight.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">Weight</td>
                        <td className="font-semibold text-lg p-3">{Weight}</td>
                      </tr>
                    )}
                    {Construction.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">
                          Construction
                        </td>
                        <td className="font-semibold text-lg p-3">
                          {Construction}
                        </td>
                      </tr>
                    )}
                    {Material.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">Material</td>
                        <td className="font-semibold text-lg p-3">
                          {Material}
                        </td>
                      </tr>
                    )}
                    {SeparationMechanisms.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">
                          Separation Mechanisms
                        </td>
                        <td className="font-semibold text-lg sm:text-md p-3">
                          {SeparationMechanisms}
                        </td>
                      </tr>
                    )}
                    {AcousticProtection.length > 1 && (
                      <tr>
                        <td className="font-semibold text-lg p-3">
                          Acoustic Protection
                        </td>
                        <td className="font-semibold text-lg sm:text-md p-3">
                          {AcousticProtection}
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

export default PayloadFairing;
