import React, { useEffect, useRef } from 'react';
import SplitType from 'split-type'; // Import SplitType
import gsap from 'gsap'; // Import GSAP

const Page8 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    // Split the text into words, characters, or both
    const splitText = new SplitType(textRef.current, {
      types: 'words, chars', // Split by words and characters
    });

    // GSAP animation: Animate the characters one by one
    gsap.from(splitText.chars, {
      opacity: 0,
      x: 50,
      stagger: 0.1, // Adjust stagger for timing between animations
      duration: 1,
      ease: 'power4.out', // Smooth easing
    });

    return () => {
      splitText.revert(); // Clean up when component is unmounted
    };
  }, []);

  return (
    <h1
      ref={textRef}
      className="text-3xl lg:text-[4vw] text-black text-center font-bold mt-[10vh] lg:mt-[20vh]"
    >
      We know how much hard <br /> work, love and care you <br /> put into
      your company. <br /> <br /> It's unfair you can lose it <br /> with a
      click.
    </h1>
  );
};

export default Page8;
