import { motion } from "framer-motion";

interface Stage1Props {
  backgroundImage: string;
  launcher: string;
  Height: string;
  Diameter: string;
  PropellantMass: string;
  PoweredBy: string;
  MaximumThrust: string;
  BurnTime: string;
  Propellant: string;
  SpecificImpulse: string[];
}

const Stage1: React.FC<Stage1Props> = ({
  backgroundImage,
  launcher,
  Height,
  Diameter,
  PropellantMass,
  PoweredBy,
  MaximumThrust,
  BurnTime,
  Propellant,
  SpecificImpulse,
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
          <h2 className="text-3xl font-bold sm:text-4xl">First Stage</h2>

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
                <td className="font-semibold text-lg p-3">Propellant Mass</td>
                <td className="font-semibold text-lg p-3">{PropellantMass}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg p-3">Powered By</td>
                <td className="font-semibold text-lg p-3">{PoweredBy}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg p-3">Maximum Thrust</td>
                <td className="font-semibold text-lg p-3">{MaximumThrust}</td>
              </tr>

              <tr>
                <td className="font-semibold text-lg p-3">Specific Impulse</td>
                <td className="font-semibold text-lg p-3">
                  <ul>
                    {SpecificImpulse.map((thrust, index) => (
                      <li key={index}>{thrust}</li>
                    ))}
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="font-semibold text-lg p-3">Burn Time</td>
                <td className="font-semibold text-lg p-3">{BurnTime}</td>
              </tr>
              <tr>
                <td className="font-semibold text-lg p-3">Propellant</td>
                <td className="font-semibold text-lg p-3">{Propellant}</td>
              </tr>
            </tbody>
          </table>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Stage1;
