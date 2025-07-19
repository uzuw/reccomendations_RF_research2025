import React, { useEffect, useState } from "react";
import HotelCard from "../components/HotelCard";
import { fetchHotels } from "../services/api";
import { FaHotel, FaMapMarkerAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.15,
      when: "beforeChildren",
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const HomePage = () => {
  const [hotels, setHotels] = useState([]);

  useEffect(() => {
    fetchHotels().then((data) => setHotels(data));
  }, []);

  return (
    <motion.div
      className="p-8 max-w-7xl mx-auto"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between bg-blue-500 rounded-xl p-10 mb-10 text-white shadow-lg">
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <FaHotel size={48} className="text-yellow-300" />
          <h1 className="text-4xl font-extrabold tracking-tight">
            Welcome to Smart Hotels
          </h1>
        </div>
        <p className="max-w-md text-lg md:text-xl opacity-90">
          Discover your perfect stay with personalized recommendations powered by Algorithms.
        </p>
      </section>

      {/* Hotels Grid */}
      <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 text-gray-800 p-10">
        <FaMapMarkerAlt className="text-blue-600" /> Hotel Recommendations
      </h2>
      <motion.div
        className="grid gap-8 md:grid-cols-1 lg:grid-cols-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <AnimatePresence>
          {hotels.map((hotel, i) => (
            <motion.div key={hotel.id} variants={itemVariants} layout>
              <HotelCard hotel={hotel} rank={i + 1} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

export default HomePage;
