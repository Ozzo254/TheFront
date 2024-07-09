import React, { useContext, useEffect, useState } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { CursorContext } from "../context/CursorContextProvider";


const Cursor = () => {
  const { clientX, clientY } = useMousePosition();
  const [cursor] = useContext(CursorContext);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      document.body.removeEventListener("mouseenter",   handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  
  return (
    <div 
      style={{ 
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        pointerEvents: "none"
      }}
    >
      <svg
        width={50}
        height={50}
        viewBox="0 0 50 50"
        style={{
          position: "absolute",
          left: clientX,
          top: clientY,
          transform: `translate(-50%, -50%) scale(${cursor.active ? 2.5 : 1})`,
          stroke: cursor.active ? "black" : "white",
          strokeWidth: 1,
          fill: cursor.active ? "rgba(255,255,255,.5)" : "black",
          transition: "transform .2s ease-in-out",
          // TODO: extra check on clientX needed here 
          // because mouseleave event not always firing
          // when slowly exiting left side of browser
          opacity: isVisible && clientX > 1 ? 1 : 0,
        }}
      >
        <circle
          cx="25"
          cy="25"
          r="8"
        />
      </svg>
    </div>
  );
};

// import React, { useEffect, useState } from 'react';
// import { motion, useMotionValue, useSpring } from 'framer-motion'

// import './Cursor.css';


// const Cursor = () => {
//     const [cursorXY, setCursorXY] = useState({
//         x: -100, y: -100})
    
//     useEffect(() => {
//       const moveCursor = (e) => {
//         const x = e.clientX - 16
//         const y = e.clientY - 16
//         setCursorXY({x, y})
//       }
//       window.addEventListener('mousemove', moveCursor)
//       return () => {
//         window.removeEventListener('mousemove', moveCursor)
//       }
//     }, []);
//     const cursorX = useMotionValue(-100);
//     const cursorY = useMotionValue(-100);

//     const springConfig = { damping: 25, stiffness: 700};
//     const cursorXSpring = useSpring(cursorX, springConfig);
//     const cursorYSpring = useSpring(cursorY, springConfig);
//   return (
//     <>
//         <motion.div className="cursor"
//         style={{
//             // transform: `translate3d(${cursorXY.x}px, ${cursorXY.y}px, 0)`,
//             translateX: cursorXSpring,
//             translateY: cursorYSpring,
//           }}></motion.div>
//     </>
//   )
// }

export default Cursor