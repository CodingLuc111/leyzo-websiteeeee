// components/Hero.js
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 text-white p-20 text-center"
    >
      <h1 className="text-6xl font-bold mb-4">hugosmp.net</h1>
      <button className="px-8 py-3 bg-blue-600 hover:bg-blue-500 transition-all rounded-lg">
        Server beitreten
      </button>
    </motion.div>
  );
}
