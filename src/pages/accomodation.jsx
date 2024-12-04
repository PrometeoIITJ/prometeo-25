import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./accomodation.css";
import { description } from "./clgdesc";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PageLoader from "../components/PageLoader";
import FadeIn from "../components/FadeIn";
import FadeInContent from "../components/FadeInContent";
import PageLoader from "../components/PageLoader";
import Go2Top from "../components/Go2Top";
import AuthContext from "../context/AuthContext";
import bg from "../assets/accomodation/bg.webp";


const CA = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  const IMAGES = [
    {
      id: "1",
      url: bg,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;

    const mediaQuery = window.matchMedia("(max-width:500px)");
    setIsMobile(mediaQuery.matches);
    const tablet = window.matchMedia("(max-width:1000px)");
    setIsTablet(tablet.matches);

    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image.url;
        // wait 2 seconds to simulate loading time
        loadImg.onload = () =>
          setTimeout(() => {
            resolve(image.url);
          }, 2000);

        loadImg.onerror = (err) => reject(err);
      });
    };
    Promise.all(IMAGES.map((image) => loadImage(image)))
      .then(() => setLoading(false))
      .catch((err) => console.log("Failed to load images", err));
  }, []);

  return (
    <>
    {loading ? (
      <PageLoader />
    ) : (
      <FadeIn>
        <div className="caPage">
        <div
  className="caTitle_slide"
  style={{ backgroundImage: `url(${bg})` }}
>

            <div className="overLayer"></div>
            <div className="ca-title-main">
            <p
  className="title-campus"
  style={{ backgroundImage: `url(${bg})` }}
>
  ACCOMODATION
</p>
<p
  className="title-ambassador"
  style={{ backgroundImage: `url(${bg})` }}
>
  A COMFORTABLE AND CONVENIENT ACCOMMODATION IN PROMETEO
</p>

            </div>

            <div className="ca_body">
              {description.map((item, index) => {
                return (
                  <FadeInContent key={index}>
                    <div className="acc_decription">
                      <div className="ca-info-container" key={index}>
                        <div className="ca_blocks">
                          <h1
                            className="margin"
                            style={{
                              textAlign: "center",
                              alignSelf: "center",
                            }}
                          >

                            {item.heading}
                          </h1>
                          <div
  className="acc-info-content"
  style={{
    display: "flex",
    flexDirection: isTablet
      ? "column-reverse"
      : index % 2 !== 0
      ? "row-reverse"
      : "row",
    justifyContent: "space-between",
    alignItems: "center",
  }}
>
  <p className="acc-p">{item.info}</p>
  <img
    src={item.img}
    style={{ width: isTablet ? "50%" : "30%" }}
  />
</div>

                        </div>
                      </div>
                    </div>
                  </FadeInContent>
                );
              })}

              <div className="ca-registration">
                <h2>
                  Prometeo 2025 and IIT Jodhpur will not be responsible for any mishaps that occur <br />through the duration of stay for Prometeo 2025
                </h2>
                <div className="ca-register-btn">
                  {!user ? (<Link to="/register">
                    <button>Register</button>
                  </Link>
                  ) : (
                    <Link to="/dashboard">
                      <button>Dashboard</button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Go2Top />
      </FadeIn>)}
  </>
  );
};

export default CA;