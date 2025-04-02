import React, { useRef } from "react";
import { motion } from "motion/react";

motion;
function Page1() {
  const ref = useRef(null);
  // variants
  const boxvariants = {
    visible: { scale: 1, opacity: 1, y: "0%" },
    hidden: { scale: 0, opacity: 0, y: "100%" },
  };

  // whileInView

  return (
    <div className="min-h-screen w-full">
      {/* 1  */}
      <div className="h-screen w-full bg-amber-100 flex justify-center items-center">
        <motion.div
          whileHover={{ scale: 1, rotate: 360 }}
          whileTap={{ scale: 5 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-50 w-50 bg-white rounded-2xl"
        ></motion.div>
      </div>
      {/* // 2 */}
      <motion.div
        ref={ref}
        className="h-screen w-full bg-green-100  flex justify-center items-center"
      >
        <motion.div
          variants={boxvariants}
          intial="hidden"
          whileInView="visible"
          animate="hidden"
          viewport={{ once: false, root: ref, amount: 0.8 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-80 w-80 bg-white rounded-2xl"
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default Page1;
