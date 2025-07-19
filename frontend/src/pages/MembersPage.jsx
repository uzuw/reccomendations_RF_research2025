import React from "react";
import { motion } from "framer-motion";
import { FaUserGraduate } from "react-icons/fa";
import { MdPeopleAlt } from "react-icons/md";

const teamMembers = [
  { name: "Ujjwal Rana" },
  { name: "Sushan Tamang" },
  { name: "Sajish Banstola" },
];

const MembersPage = () => {
  return (
    <motion.div
      className="max-w-3xl mx-auto p-8 text-gray-800 font-sans"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center mb-10">
        <MdPeopleAlt className="text-5xl text-blue-600 mx-auto mb-4 animate-pulse" />
        <h1 className="text-4xl font-bold">Meet Our Team</h1>
        <p className="text-gray-500 mt-2">The minds behind the Hotel Recommendation System</p>
      </div>

      <motion.ul
        className="space-y-4"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.2,
            },
          },
        }}
      >
        {teamMembers.map((member, idx) => (
          <motion.li
            key={idx}
            className="flex items-center bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition duration-300 border border-gray-100"
            whileHover={{ scale: 1.03, color: "#1d4ed0" }}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <FaUserGraduate className="text-blue-500 text-2xl mr-4" />
            <span className="text-lg font-semibold tracking-wide">{member.name}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default MembersPage;
