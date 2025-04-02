import React from "react";
import { motion, useMotionValue, useTransform } from "motion/react";
motion;
function Page5() {
  const x = useMotionValue(0);
  const scale = useTransform(x, [-100, 0, 100], [1.5,1, 2]);
  const borderRadius = useTransform(x, [-100, 0, 100], ["50%", "5%", "50%"]);
  const backgroundColor = useTransform(
    x,
    [-100, 0, 100],
    ["#6d4b7e", "#ffff", "#695a37"]
  );

  // useMotionValue
  return (
    <div className="min-h-screen w-full">
      <div className="h-screen w-full bg-cyan-900 flex flex-col justify-center items-center relative">
        <motion.div
          style={{ x, scale, borderRadius, backgroundColor }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          className="h-40 w-40 bg-white rounded-2xl"
        ></motion.div>
      </div>
    </div>
  );
}

export default Page5;
