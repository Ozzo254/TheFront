// import React from 'react'
import "./Hero.css";
// import arrow_btn from "../../assets/arrow_btn.png";
import play_icon from "../../assets/play_icon.png";
import pause_icon from "../../assets/pause_icon.png";
import useCursorHandlers from "../utils/hooks/useCursorHandlers";
import { ArrowOutward } from "@mui/icons-material";
// import { motion} from "framer-motion"


const Hero = ({
  heroData,
  setHeroCount,
  heroCount,
  setPlayStatus,
  playStatus,
}) => {
  const cursorHandlers = useCursorHandlers();

  // const draw = {
  //   hidden: { pathLength: 0, opacity: 0 },
  //   visible: (i) => {
  //     const delay = 1 + i * 0.5;
  //     return {
  //       pathLength: 1,
  //       opacity: 1,
  //       transition: {
  //         pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
  //         opacity: { delay, duration: 0.01 }
  //       }
  //     };
  //   }
  // };


  return (
    <div className="hero">
      <div className="hero-text">
        <p>{heroData.text1}</p>
        <p>{heroData.text2}</p>
      </div>
      <div className="hero-explore" {...cursorHandlers}>
        <p>Explore More...</p>
        <ArrowOutward sx={{
          width: '4.5rem',
          height: '4.5rem',
          backgroundColor: 'white',
          border: 'none',
          borderRadius: '5rem',
          color: 'teal',
          position: 'absolute',
          top: '0',
          right: '0',
          padding: '1.1rem', //animate icon to move from bottom-left to top-right
        }} />
        {/* <img src={arrow_btn} alt="" /> */}
      </div>
      <div className="hero-dot-play">
        <ul className="hero-dots">
          <li
            onClick={() => setHeroCount(0)}
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(1)}
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(2)}
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(3)}
            className={heroCount === 3 ? "hero-dot orange" : "hero-dot"}
          ></li>
          {/* <li
            onClick={() => setHeroCount(4)}
            className={heroCount === 4 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(5)}
            className={heroCount === 5 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(6)}
            className={heroCount === 6 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(7)}
            className={heroCount === 7 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(8)}
            className={heroCount === 8 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(9)}
            className={heroCount === 9 ? "hero-dot orange" : "hero-dot"}
          ></li>
          <li
            onClick={() => setHeroCount(10)}
            className={heroCount === 10 ? "hero-dot orange" : "hero-dot"}
          ></li> */}
        </ul>
        <div className="hero-play">
          <img
            onClick={() => setPlayStatus(!playStatus)}
            src={playStatus ? pause_icon : play_icon}
            alt=""
          />
          <p>See video</p>
        </div>
      </div>
      {/* <motion.svg
  width="600"
  height="600"
  viewBox="0 0 600 600"
  initial="hidden"
  animate="visible"
>
  <motion.line
    x1="220"
    y1="30"
    x2="220"
    y2="570"
    stroke="#00cc88"
    variants={draw}
    custom={2}
    stroke-width="10px"
    stroke-linecap="round"
    fill="transparent"
  />
  <motion.path
    d="M220 570 L250 600 L190 600 Z"
    fill="#00cc88"
    variants={draw}
    custom={2}
  />
</motion.svg> */}
    </div>
  );
};

export default Hero;
