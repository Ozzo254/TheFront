// import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    { icon: "fa fa-tools", label: "Reports & dashboards" },
    { icon: "", label: "Action plans" },
    { icon: "", label: "Webpages" },
    { icon: "", label: "Graphics & videos" },
    { icon: "", label: "Softwares & Programs" },
    { icon: "", label: "24 hours Support" },
    { icon: "", label: "Unlimited Revisions" },
    { icon: "", label: "Flexible & Friendly prices" },
  ];
  return (
    <div className="features-container">
      <h1>Offers.</h1>
      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature">
            <i className={feature.icon}></i>
            <h3>{feature.label}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
