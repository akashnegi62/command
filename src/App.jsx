import React, { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
// components
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/Page4";
import Page5 from "./Components/Page5";
import Page6 from "./Components/Page6";
import Page7 from "./Components/Page7";
function App() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
    });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    <div className="min-h-screen w-[95%] m-auto">
      <Page5 />
      <Page7/>
      <Page6 />
      <Page4 />
      <Page2 />
      <Page3 />
      <Page1 />
    </div>
  );
}

export default App;
