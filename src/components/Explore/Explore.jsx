// import React from "react";
import useCursorHandlers from "../utils/hooks/useCursorHandlers";
import "./Explore.css";

const Explore = () => {
  const cursorHandlers = useCursorHandlers();

  return (
    <>
    <div className="about-us">
      <h1>About Us</h1>

      <h2>| <q>Empowering Your Entrepreneurial Journey.</q></h2>
      <div className="about-grid-container">
        <div className="grid-element" {...cursorHandlers}>
          <h3>Our Mission:</h3>
          <p>Committed to delivering researched business ideas, comprehensive action plans, and ongoing support to drive business growth and success ensuring minimal risk.</p>
        </div>
        <div className="grid-element" {...cursorHandlers}>
          <h3>Our Vision:</h3>
          <p>Be the leading consultancy firm, reowned for revolutionizing entrepreneurship approaches, setting new standards for business development solutions and setting our clients on a path to long-term prosperity.</p>
        </div>
        <div className="grid-element" {...cursorHandlers}>
          <h3>Core Values:</h3>
          <p>Client-Centric: Putting clients' needs at the forefront of every decision and action.
          Integrity: Upholding honesty, transparency, and ethical conduct in all interactions.
   - Excellence: Striving for exceptional quality and delivering value-added services.
   - Innovation: Embracing creativity and forward-thinking to provide cutting-edge solutions.
   - Collaboration: Fostering teamwork and partnerships to achieve mutual success.
          </p>
        </div>
      </div>
    </div>
    </>
  );
};

export default Explore;
