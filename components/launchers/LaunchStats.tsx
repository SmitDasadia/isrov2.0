import { motion } from "framer-motion";

interface LaunchStatsProps {
  data: {
    TotalLaunches: number;
    Successes: number;
    Failures: number;
    PartialFailures: number;
  };
}

const LaunchStats: React.FC<LaunchStatsProps> = ({ data }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className=" p-4 "
    >
      <section className="text-white body-font flex justify-center items-center">
        <div className="container p-5 pt-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <div className="p-4">
              <h2 className="title-font font-bold sm:text-8xl text-3xl ">
                {data.TotalLaunches} {/* Provide the actual Total Launches data */}
              </h2>
              <p className="font-semibold text-lg">Total Launches</p>
            </div>

            <div className="p-4">
              <h2  className="title-font font-bold sm:text-8xl text-3xl ">
                {data.Successes} {/* Provide the actual Successes data */}
              </h2>
              <p className="font-semibold text-lg">Successes</p>
            </div>

            <div className="p-4">
              <h2  className="title-font font-bold sm:text-8xl text-3xl ">
                {data.Failures} {/* Provide the actual Failures data */}
              </h2>
              <p className="font-semibold text-lg">Failures</p>
            </div>

            <div className="p-4">
              <h2  className="title-font font-bold sm:text-8xl text-3xl ">
                {data.PartialFailures} {/* Provide the actual Partial Failures data */}
              </h2>
              <p className="font-semibold text-lg">Partial Failures</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default LaunchStats;
