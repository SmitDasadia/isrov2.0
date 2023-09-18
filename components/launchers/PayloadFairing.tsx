import { motion } from "framer-motion";

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
  stageName
}) => {
  return (
    <motion.section
      className="min-h-screen text-white bg-center bg-cover"
      style={{
        backgroundImage: `url('${backgroundImage}')`,
      }}
    >
      <div className="container p-2 pt-2 flex justify-start items-start">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-white p-10 w-full lg:w-2/3"
        >
          <h2 className="text-2xl font-semibold text-slate-300">{launcher}</h2>
          <h2 className="text-3xl font-bold sm:text-4xl">{stageName}</h2>

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
                  <td className="font-semibold text-lg p-3">{Diameter}</td>
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
                  <td className="font-semibold text-lg p-3">Construction</td>
                  <td className="font-semibold text-lg p-3">{Construction}</td>
                </tr>
              )}
              {Material.length > 1 && (
                <tr>
                  <td className="font-semibold text-lg p-3">Material</td>
                  <td className="font-semibold text-lg p-3">{Material}</td>
                </tr>
              )}
              {SeparationMechanisms.length > 1 && (
                <tr>
                  <td className="font-semibold text-lg p-3">
                    Separation Mechanisms
                  </td>
                  <td className="font-semibold text-lg p-3">
                    {SeparationMechanisms}
                  </td>
                </tr>
              )}
              {AcousticProtection.length > 1 && (
                <tr>
                  <td className="font-semibold text-lg p-3">
                    Acoustic Protection
                  </td>
                  <td className="font-semibold text-lg p-3">
                    {AcousticProtection}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PayloadFairing;
