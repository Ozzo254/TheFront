// import React from "react";
import "./Services.css";
import ServicesGallery from "../utils/serices";
import { Scale } from "@mui/icons-material";
// import useCursorHandlers from "../utils/hooks/useCursorHandlers";
// import {Agreement as HRImg,
//   Design as BrandImg,
//   Invoices as FinImg,
//   Research3 as StratImg,
//   Marketing as MktImg,
//   guid as ResearchImg,
//   Engieering as ItImg,
// } from "../utils/serices"

const Services = () => {
  const bgTransform = document.querySelector(".service-item");
  // const cursorHandlers = useCursorHandlers();

  // bgTransform.addEventListener("mousemove",	) => {bgTransform.style.backgroundImage(Scale(1))

  const services = [
    {
      title: "Business Strategy",
      bgImg: ServicesGallery.Research3,
      description:
        "Develope results-oriented business strategies to achieve set goals.",
      icon: "fa fa-briefcase",
    },
    {
      title: "Design & Branding",
      bgImg: ServicesGallery.Design,
      description:
        "Develop compelling digital brands to image and market clients services",
      icon: "fa fa-ranking-star",
    },
    {
      title: "Finance & Accounting",
      bgImg: ServicesGallery.invoice,
      description:
        "Financial solutions & advice to improve financial management.",
      icon: "fa fa-money",
    },
    {
      title: "Marketing Solutions",
      bgImg: ServicesGallery.Marketing,
      description:
        "Innovative marketing strategies to improve brand awareness, sales and customer retention.",
      icon: "fa fa-chart-line",
    },
    {
      title: "HR Solutions",
      bgImg: ServicesGallery.Agreement,
      description:
        "Offer Human Resource services such as payrolling, auditing and hiring",
      icon: "fa fa-users-gear",
    },
    {
      title: "Research",
      bgImg: ServicesGallery.guid,
      description: "Extracting clarity from noise to answer the infamous, 'so now what?' ",
      icon: "fa-solid fa-magnifying-glass-dollar fa-xl",
    },
    {
      title: "IT Solutions",
      bgImg: ServicesGallery.Engineering,
      description:
        "IT services and ICT support including data storage, management, automation and networking",
      icon: "fa fa-laptop-code fa-xl",
    },
    // {
    //   title: "Business Strategy",
    //   bgImg: {StratImg},
    //   description:
    //     "Develope results-oriented business strategies to achieve set goals.",
    //   icon: "fa fa-briefcase",
    // },
    // {
    //   title: "Design & Branding",
    //   bgImg: {BrandImg},
    //   description:
    //     "Develop compeling digital brands to image and market clients services",
    //   // icon: "fa fa-tools",
    //   icon: "fa fa-ranking-star",
    // },
    // {
    //   title: "Finance & Accounting",
    //   bgImg: {FinImg},
    //   description:
    //     "Financial solutions & advice to improve financial management.",
    //   icon: "fa fa-money",
    // },
    // {
    //   title: "Marketing Solutions",
    //   bgImg: {MktImg},
    //   description:
    //     "Innovative marketing strategies to improve brand awareness, sales and customer retention.",
    //   icon: "fa fa-chart-line",
    //   // icon: "fa-light fa-display-chart-up-circle-dollar",  // pro-icon
    // },
    // {
    //   title: "HR Solutions",
    //   bgImg: {HRImg},
    //   description:
    //     "Offer Human Resource services such as payrolling, auditing and hiring",
    //   // icon: "fa fa-users-cog",
    //   icon: "fa fa-users-gear",
    // },
    // {
    //   title: "Research",
    //   bgImg: {ResearchImg},
    //   description: "Extracting clarity from noice to answer the infamous 'Why?','How?'and ',so now what?' ",
    //   // icon: "fa fa-tools",
    //   icon: "fa-solid fa-magnifying-glass-dollar fa-xl",
    // },
    // {
    //   title: "IT Solutions",
    //   bgImg: {ItImg},
    //   description:
    //     "IT services and ICT support including data storage, management, automation and networking",
    //   icon: "fa fa-laptop-code fa-xl",
    // },
  ];

  // const cursorHandlers = useCursorHandlers();

  return (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <div className="services-grid" >
          {services.map((service, index) => (
            <div key={index} className="service-item" style={{
              backgroundImage: `url(${service.bgImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'space-between',
              gap: '1rem',
              height: '100%',
              width: '100%',
              borderRadius: '12px',
              padding: '1em',
              // paddingLeft: 0,
              color: 'white',
              opacity: 0.85,
              // transform: "scale(1.21)",
              transition: 'transform .4s',
              // ":hover": {
              //  transform: "scale(1.2)",
              // },
              // overflow: "hidden",
              // margin: '2rem'

              // zIndex: 1,
              // backgroundColor: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0))',
              }}
              // {...cursorHandlers}

              onMouseEnter={(e) =>{
                e.currentTarget.style.transform = 'scale(1.26)';
                // e.currentTarget.style.rotate = '360';
              }}
              onMouseLeave={(e) =>{
                e.currentTarget.style.transform ='scale(1.11)';
              }}
              >
              <div className="caption">
                <i className={service.icon}></i>
                <h3>{service.title}</h3>
              </div>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
