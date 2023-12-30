import { FC } from "react";
import { motion } from "framer-motion";

interface FlightEventProps {
  flightEvents: any;
}

const FlightEvent: FC<FlightEventProps> = ({ flightEvents }) => {
  return (
    <motion.section className="min-h-screen bg-black text-white">
      <div className="container mx-auto flex justify-center items-center">
        <div className="container mx-auto p-10">
          <h1 className="text-3xl sm:text-5xl font-bold mb-8 ">
            Flight Events
          </h1>
          <table className="w-full ">
            <thead>
              <tr className="text-xs sm:text-xl font-bold text-white text-left">
                <th className="p-2">Event</th>
                <th className="p-2">Time (s)</th>
                <th className="p-2">Altitude (km)</th>
                <th className="p-2">Relative Velocity (m/s)</th>
              </tr>
            </thead>
            <tbody>
              {flightEvents.map((event: any, index: number) => (
                <tr key={index} className="text-white font-semibold ">
                  <td className="p-4 border-b-[0.2px]">{event.Event}</td>
                  <td className="p-4 border-b-[0.2px]">
                    {event.Time}
                  </td>
                  <td className="p-4 border-b-[0.2px]">
                    {event.Altitude} km
                  </td>
                  <td className="p-4 border-b-[0.2px]">
                    {event.Velocity} m/s
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </motion.section>
  );
};

export default FlightEvent;
