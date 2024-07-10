// import React from "react";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Background from "./components/Background/Background";
import Hero from "./components/Hero/Hero";
import Explore from "./components/Explore/Explore";
import Services from "./components/Servces/services";
// import Features from "./components/Features/Features";

// import './App.css';
import Cursor from "./components/utils/shared/Cursor";
import CursorContextProvider from "./components/utils/context/CursorContextProvider";
import Footer from "./components/Footer/Footer";
// import Button from "./components/utils/shared/Button";

const App = ({children}) => {
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Own A", text2: "real business" },
    { text1: "Make ", text2: "Dreams Reality" },
    { text1: "Give into", text2: "what you love" },
    { text1: "Give into", text2: "what you love" },
    { text1: "Give into", text2: "what you love" },
    { text1: "Give into", text2: "what you love" },
    { text1: "Give into", text2: "what you love" },
    { text1: "Give into", text2: "what you love" },
    { text1: "Give into", text2: "what you love" },
  ];
  const [heroCount, setHeroCount] = useState(2);
  const [playStatus, setPlayStatus] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setHeroCount((count) => {
        return count === 3 ? 0 : ++count;
      });
    }, 3000);
  }, []);

  
  return (
    <>
      {/* <video className="background-video" autoPlay loop muted>
        <source src="https://www.w3schools.com/html/movie.mp4" type="video/mp4" />
      </video> */}
      <CursorContextProvider>
        <Cursor />
        {children}
        <Background playStatus={playStatus} heroCount={heroCount} />
        <Navbar />
        <Hero
          setPlayStatus={setPlayStatus}
          heroData={heroData[heroCount]}
          heroCount={heroCount}
          setHeroCount={setHeroCount}
          playStatus={playStatus}
        />
        <Services />
        <Explore />
        <Footer />
        {/* <Button /> */}
        {/* <Features /> */}      
      </CursorContextProvider>
    </>
  );
};

export default App;
