import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "motion/react";

motion;
function Page4() {
  const [progress, setProgress] = useState();
  const { scrollYProgress, scrollY } = useScroll();
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setProgress(latest.toFixed(2));
  });

  // useScroll + animate intial 
  const [vision, setVision] = useState(false);
  scrollY.on("change", (latest) => {
    console.log(latest);
    if (latest > 1700) {
      setVision(true);
    } else {
      setVision(false);
    }
  });

  const variantsbox = {
    visible: { rotate: 360, opacity: 1 },
    hidden: { rotate: 0, opacity: 0 },
  };

  // useScroll Hook
  return (
    <div className="min-h-screen w-full">
      <motion.div className="h-screen w-full bg-cyan-900 flex flex-col justify-center items-center relative">
        {progress > 0.02 ? (
          <motion.div
            style={{
              scaleX: progress,
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              height: 3,
              originX: 0,
              zIndex: 100,
              backgroundColor: "#ff0088",
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          ></motion.div>
        ) : null}
        <motion.div
          variants={variantsbox}
          initial="hidden"
          animate={vision ? "visible" : "hidden"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-100 w-20 bg-white rounded-2xl"
        ></motion.div>
      </motion.div>
    </div>
  );
}

export default Page4;
