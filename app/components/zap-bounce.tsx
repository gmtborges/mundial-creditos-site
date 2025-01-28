import { motion } from "motion/react";
import { SiWhatsapp } from "@icons-pack/react-simple-icons";

export function ZapBounce() {
  return (
    <div className="relative flex items-center justify-center">
      <motion.button
        onClick={() => {
          window.open("https://wa.me/5562982111127", "_blank");
        }}
        className="fixed bottom-6 right-6 flex items-center gap-2 rounded-full bg-green-200 p-4 shadow-lg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <SiWhatsapp color="#047857" />
        <span className="hidden md:block">Fale com a gente</span>
      </motion.button>
    </div>
  );
}
