import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config";
import { Link } from "react-router-dom";
import FadeIn from "../components/FadeIn";
import FadeInContent from "../components/FadeInContent";
import PageTitle from "../components/PageTitle";
import PageLoader from "../components/PageLoader";
import Go2Top from "../components/Go2Top";
import redStone from "../assets/red-bottle.webp";
import bg from "../assets/events/Background.jpg";
import "./Events.css";
import PreEvents from "./PreEvents";
import pre_events from "../assets/events/pre-event.svg";
import all_events from "../assets/events/all-eventsvg.svg";
import technical_events from "../assets/events/tech.svg";
import entrepreneurial_events from "../assets/events/enter.svg";
import eventsData from "./Events24";


const Events = () => {
  const [category, setCategory] = useState("Technical");
  const [loading, setLoading] = useState(true);
  const IMAGES = [
    {
      id: "1",
      url: redStone,
    },
    {
      id: "2",
      url: bg,
    },
  ];

  useEffect(() => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;
  }, []);

  const element = document.getElementById("filter___id");

  function handleEventTab(e) {
    const filterBtns = document.querySelectorAll(".filter___button");
    const btn = filterBtns[e];
    filterBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    btn.classList.add("active");
    // console.log(category);

  }

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <FadeIn>
          <div className="w-full h-svh">
            <div
              className="eventspage-main "
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="events-heading">
                <h1 className="selected-heading">All events</h1>
              </div>
              <FadeInContent>
                <div className="eventspage-events">
                  <div className="filter" id="filter___id">
                   
                        <button
                          className={`filter___button`}
                          onClick={(e) => {
                            setCategory("pre_Events");
                            // element.scrollIntoView({
                            //   behavior: "smooth",
                            //   block: "start",
                            // });
                            // handleEventTab(0);
                          }}
                        >
                          <img className="" src={pre_events} alt="cloud" />
                        </button>
                    
                   
                        <button
                          className={`filter___button`}
                          onClick={(e) => {
                            setCategory("Technical");
                            // element.scrollIntoView({
                            //   behavior: "smooth",
                            //   block: "start",
                            // });
                            // handleEventTab(1);
                          }}
                        >
                          <img className="" src={technical_events} alt="cloud" />
                        </button>
                    
                        <button
                          className={`filter___button`}
                          onClick={(e) => {
                            setCategory("Entrepreneurial");
                            // element.scrollIntoView({
                            //   behavior: "smooth",
                            //   block: "start",
                            // });
                            // handleEventTab(2);
                          }}
                        >
                          <img
                            className=""
                            src={entrepreneurial_events}
                            alt="cloud"
                          />
                        </button>
                    
                  </div>
                  <div className="pre-events" id="EventList">
                    <PreEvents category={category} data={eventsData} />
                  </div>
                </div>
              </FadeInContent>
            </div>
            <Go2Top />
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Events;
