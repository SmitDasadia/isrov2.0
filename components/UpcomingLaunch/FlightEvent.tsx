// components/FlightEvent.tsx
import { FC } from 'react';
import { motion } from 'framer-motion';

interface FlightEventProps {
  event: string;
  time: number;
  altitude: number;
  velocity: number;
}

const FlightEvent: FC<FlightEventProps> = ({ event, time, altitude, velocity }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white shadow-md p-4 rounded-lg mb-4"
    >
      <h2 className="text-lg font-semibold">{event}</h2>
      <table className="w-full mt-2">
        <tbody>
          <tr>
            <td className="font-semibold">Time:</td>
            <td>{time}</td>
          </tr>
          <tr>
            <td className="font-semibold">Altitude:</td>
            <td>{altitude} km</td>
          </tr>
          <tr>
            <td className="font-semibold">Velocity:</td>
            <td>{velocity} m/s</td>
          </tr>
        </tbody>
      </table>
    </motion.div>
  );
};

export default FlightEvent;
