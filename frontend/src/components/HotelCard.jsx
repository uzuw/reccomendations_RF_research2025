import React from "react";
import { motion } from "framer-motion";

const rankColors = {
  1: "bg-yellow-400 text-yellow-800",
  2: "bg-yellow-300 text-yellow-900",
  3: "bg-yellow-200 text-yellow-900",
};

const HotelCard = ({ hotel, rank }) => {
  const rankColor = rankColors[rank] || "bg-gray-300 text-gray-800";

  return (
    <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
  className="relative max-w-2xl bg-white rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-shadow duration-300 flex overflow-hidden"
>
  {/* Ranking Badge */}
  <div
    className={`absolute top-1 left-1 z-10 rounded-full px-4 py-1 font-bold text-lg ${rankColor}`}
    style={{ boxShadow: "0 2x 6px rgba(0,0,0,0.15)" }}
  >
    #{rank}
  </div>


      {/* Image */}
      <img
        src={hotel.image_url}
        alt={hotel.name}
        className="w-48 h-60 object-cover flex-shrink-0"
        loading="lazy"
      />

      {/* Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <h2 className="text-3xl font-semibold text-gray-900 mb-2">{hotel.name}</h2>

        <div className="text-gray-700 space-y-1">
          <p><strong>Location:</strong> {hotel.location}</p>
          <p><strong>Price:</strong> {hotel.price}</p>
          <p><strong>Features:</strong> {hotel.features}</p>
        </div>

        <p className="text-yellow-500 font-bold text-xl mt-4">
          ⭐ {hotel.rating}
        </p>
      </div>
    </motion.div>
  );
};

export default HotelCard;
