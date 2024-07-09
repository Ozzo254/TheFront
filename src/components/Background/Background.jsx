// import React from 'react'
import "./Background.css";
import video1 from "../../assets/video1.mp4";
import acc from "../../assets/accomodation.png";
import admin from "../../assets/administration.png";
import asst from "../../assets/assistance.jpg";
import callService from "../../assets/call_service.png";
import custCare from "../../assets/customer_service.png";
import office from "../../assets/office.png";
import macbook from "../../assets/macbook.jpg";
import reception from "../../assets/reception.jpg";
import team from "../../assets/team.png";
import travel from "../../assets/travel.png";
import work from "../../assets/work.png";

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className="background fade-in" autoPlay loop muted>
        <source src={video1} type="video/mp4" />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={team} className="background fade-in" alt="" />;
  } else if (heroCount === 1) {
    return <img src={work} className="background fade-in" alt="" />;
  } else if (heroCount === 2) {
    return <img src={macbook} className="background fade-in" alt="" />;
  } else if (heroCount === 3) {
    return <img src={office} className="background fade-in" alt="" />;
  } else if (heroCount === 4) {
    return <img src={travel} className="background fade-in" alt="" />;
  } else if (heroCount === 5) {
    return <img src={reception} className="background fade-in" alt="" />;
  } else if (heroCount === 6) {
    return <img src={admin} className="background fade-in" alt="" />;
  } else if (heroCount === 7) {
    return <img src={asst} className="background fade-in" alt="" />;
  } else if (heroCount === 8) {
    return <img src={acc} className="background fade-in" alt="" />;
  } else if (heroCount === 9) {
    return <img src={callService} className="background fade-in" alt="" />;
  } else if (heroCount === 10) {
    return <img src={custCare} className="background fade-in" alt="" />;
  }
    return <div></div>;
};

export default Background;
