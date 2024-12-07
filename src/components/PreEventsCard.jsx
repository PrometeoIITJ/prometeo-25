import React from "react";
import { API_BASE_URL } from "../config";
import imageBox from "../assets/events/imageBox.svg"
import btn1 from "../assets/events/button-1.svg"
import btn1h from "../assets/events/button-1hov.svg"
import "./PreEventsCard.css";
import {toast} from 'react-hot-toast';
import "react-toastify/dist/ReactToastify.css"; 

const PreEventsCard = ({
  imgURL,
  eventName,
  eventTime,
  eventButton,
  eventRegister,
  workshop,
  description
}) => {

  const notify = () => {
    toast("Registration Comming soon!!", {
      duration: 3000, // Auto-close after 3 seconds
      position: "top-center", // Center the toast on the screen
     
    });
  };
  function truncateText(text, wordLimit) {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  }
  
  return (
    <div className='event-card' aria-labelledby="event card">
      <div className="event-card__filter membre">
        <div className="register-btn-div">
          <p className="r-btn">{truncateText(description, 35)}</p>
        </div>
        <a href={eventRegister}>
          <div className="member-img " >
            <div className="background-overlay " style={{ backgroundImage: `url(${imageBox})` }}   ></div>
            <img src={imgURL.replace(
              "http://localhost:8004",
              "https://devluplabs.iitj.ac.in"
            )} alt="" />
          </div>
        </a>
      </div>
      <div className="event-card__container ">
        <h2>{eventName}</h2>
        <time>
          {eventTime
            .split("-")
            .join("-")
            .replace("01", "JAN")
            .replace("12", "DEC")}
        </time>
        <div className="btn-container ">
          <a className="cursor-pointer" onClick={notify}>
          <img src={btn1} className="btn1" alt="" />
          <img src={btn1h} className="btn1-hov" alt="" />
          </a>
        </div>
        <div className="event-prize">
          {eventButton != "Coming soon..." ? (
            <>
              <p className="prizes">Prizes Worth</p>
              <span>{eventButton.replace("Prize", "")}</span>
            </>
          ) : (
            <></>
          )}
        </div>
     
      </div>
      
    </div>
  );
};

export default PreEventsCard;
