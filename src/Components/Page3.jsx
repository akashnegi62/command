import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
motion;
function Page3() {
  const Boxref = useRef();
  const isInView = useInView(Boxref, { amount: 0.8, margin: "0px 0px -200px 0px" });

  // variants

  const Boxvariants = {
    visible: { opacity: 1, rotate: 360, scale: 1, },
    hidden: { opacity: 0, rotate: 0, scale: 0, },
  };
  // useInView Hook
  return (
    <div className="min-h-screen w-full">
      <div className="h-screen w-full bg-blue-100  flex flex-col justify-center items-center">
        <div>{`${isInView}`}</div>
        <motion.div
          variants={Boxvariants}
          ref={Boxref}
          animate={isInView ? "visible" : "hidden]"}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="h-60 w-60 bg-white rounded-2xl"
        ></motion.div>
      </div>
    </div>
  );
}

export default Page3;
