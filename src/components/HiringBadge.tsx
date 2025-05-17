import { motion } from "framer-motion";

export const HiringBadge = () => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="flex items-center"
  >
    {/* Pulse indicator */}
    <motion.div
      className="absolute -right-2 -top-2"
      animate={{ scale: [1, 1.2, 1] }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <motion.div
        className="w-2 h-2 bg-green-400 rounded-full"
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(34, 197, 94, 0.4)",
            "0 0 0 8px rgba(34, 197, 94, 0)",
          ],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>

    {/* Badge text */}
    <motion.div
      className="ml-2 px-2 py-0.5 bg-gradient-to-r from-green-500/10 via-emerald-500/15 to-green-500/10 rounded-sm backdrop-blur-sm border border-green-500/20"
      whileHover={{
        scale: 1.05,
        backgroundColor: "rgba(16, 185, 129, 0.2)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="text-xs font-medium bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"
        animate={{ opacity: [0.8, 1, 0.8] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        Hiring Now
      </motion.span>
    </motion.div>
  </motion.div>
);
