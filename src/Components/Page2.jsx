import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
motion;
function Page2() {
  // variants
  const boxvariants = {
    visible: { scale: 1, opacity: 1 },
    hidden: { scale: 0, opacity: 0 },
  };
  const [show, setshow] = useState(false);
  const handleClick = () => {
    setshow((show) => !show);
  };
  // AnimatePresence -> exit={"hidden"}
  return (
    <div className="min-h-screen w-full">
      <div className="h-screen w-full bg-red-100  flex flex-col justify-center items-center relative z-10">
        <AnimatePresence initial={false} >
          {show && (
            <motion.div
              variants={boxvariants}
              initial={"hidden"}    
              animate={"visible"}
              exit={"hidden"}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="h-80 w-80 bg-white rounded-2xl"
            ></motion.div>
          )}
        </AnimatePresence>
        <button
          onClick={() => {
            handleClick();
          }}
          className="mt-5 px-8 py-5 absolute top-[70%] bg-black text-white rounded-2xl"
        >
          Click Me
        </button>
      </div>
    </div>
  );
}

export default Page2;
