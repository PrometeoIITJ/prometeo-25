import Stars from "./components/stars.jsx";
import React, { useEffect, useRef, useState } from "react";
import Modal from "./components/modal.jsx";
import { FaInstagram, FaLinkedinIn, FaDownload } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Home.css";
import logo from "./assets/coming-soon/Frame_10.svg";
import FogLeft from "./components/fogLeft.jsx";
import FogRight from "./components/fogRight.jsx";
import BGmusic from "./assets/coming-soon/bg-music.mp3";
import { HiMiniSpeakerWave, HiMiniSpeakerXMark } from "react-icons/hi2";
import { Link } from "react-router-dom";
import Loader from "./loader/Loader.jsx";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [music, setMusic] = useState(false);
  const audioRef = useRef();
  const starsRef = useRef(null); // Ref to store the stars container
  const handlePreRegisterClick = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleBGmusic = () => {
    if (music) {
      audioRef.current.pause();
      setMusic(false);
    } else {
      audioRef.current.play();
      audioRef.current.volume = audioRef.current.volume * 0.1;
      audioRef.current.speed = 0.1;
      setMusic(true);
    }
  };


  // useEffect(() => {
  //   const IMAGES = [
  //     {
  //       id: "1",
  //       url: "https://s3-alpha-sig.figma.com/img/5913/49db/a11a9df23f11a4616a33f42eb7785aff?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M-tENTWoDmOQ2j6c8wkJXsi9WQqogzhPVrOQg034svt0kZ13rXmmDxUn~oDA4Tvet219pV9tWlHAj4b3POHM3r7LfUqzD-KHQVUcThrBLX62fH8~PjOK18cZWBY-jqzeui~HYTyT6tEParOd2hztF-pP3zyR5IF2GqWIKIYa9GGAobBk7Yb5G9hgob96rWBc-st2nytQ-l5bmA2lbLbbVbk5Sp8hxT9tVSKGs3dWtugy3yGESQMjPexTh6FoatFux34pVCNlLwNyY1X9246d~aDgb6jKUk0cT0Iqv5YDVU5u0BPiPuAXOOcUJYnYYlS1HV4NG7vO87045jNt4b~wbQ__",
  //     },
  //   ];

  //   const loadImage = (image) => {
  //     return new Promise((resolve, reject) => {
  //       const loadImg = new Image();
  //       loadImg.src = image.url;
  //       loadImg.onload = () => setTimeout(() => resolve(image.url), 100);
  //       loadImg.onerror = (err) => reject(err);
  //     });
  //   };

  //   Promise.all(IMAGES.map((image) => loadImage(image)))
  //     .then(() => setLoading(false))
  //     .catch((err) => console.log("Failed to load images", err));
  // }, []);
  useEffect(() => {
    const timer = setInterval(() => {
    setLoading(false)
    document.getElementById("loader").style.opacity= 0
    }, 1000);
 
    return () => clearInterval(timer);

  }, []);
  return (
    <>
      {/* {loading ? (
        <>
        <h1>Loading...</h1>
        </>
      ) : ( */}
        <Loader style={loading ? {opacity:1}: {opacity:0}}/>
       
        <div style={loading ? {display:"none"}: {display:"block"}}>
          <div className="home-body">
            <div ref={starsRef} className="stars">
              
              <Stars number={700}/>
            </div>
            <div className="home-main-container">
              <div className="logo">
                <Link to="/"><img src={logo} alt="Logo" /></Link>
              </div>
              <div className="home-title">
                <h1>COMING SOON</h1>
                <h2>17-19 Jan 2025</h2>
              </div>
              <div className="details">
              <div className="pre-register register">
                <span onClick={handlePreRegisterClick}>PRE-REGISTER NOW</span>
              </div>
              <div className="pre-register brochure">
                <span><a href="https://drive.google.com/file/d/1r9mu9t_DfMARXxZ8qPl1LWiPNtSbEVCQ/view" target="_blank" rel="noopener noreferrer"><FaDownload/> BROCHURE </a></span>
              </div>
              </div>
              
              
              <div className="fogLeftContainer">
                <FogLeft/>
        
              </div>
              <div className="fogRightContainer">
                <FogRight/>
              </div>
            </div>
            <div className="home-music">
                {music ? (
                  <HiMiniSpeakerWave
                    // size={40}
                    color="#FFFFFF"
                    onClick={handleBGmusic}
                  />
                ) : (
                  <HiMiniSpeakerXMark
                    // size={40}
                    color="#FFFFFF"
                    onClick={handleBGmusic}
                  />
                )}
              </div>
              <audio src={BGmusic} loop ref={audioRef}></audio>
            <div className="home-footer">
              <div className="home-socialmedia">
                <a
                  href="https://www.linkedin.com/company/prometeo2023/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedinIn size={40} color="#FFFFFF" />
                </a>
                <a
                  href="https://twitter.com/IITJ_Prometeo?t=RAvD5KTW1SQD1772wsIIsw&s=08"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaXTwitter size={35} color="#FFFFFF" />
                </a>

                <a
                  href="https://www.instagram.com/prometeo.iitj"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram size={40} color="#FFFFFF" />
                </a>
                
              </div>
            </div>
            
          </div>
          {/* <div className="home-footer">
            <div className="home-socialmedia">
              <a
                href="https://www.linkedin.com/company/prometeo2023/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn size={40} color="#FFFFFF" />
              </a>
              <a
                href="https://twitter.com/IITJ_Prometeo?t=RAvD5KTW1SQD1772wsIIsw&s=08"
                target="_blank"
                rel="noreferrer"
              >
                <FaXTwitter size={35} color="#FFFFFF" />
              </a>
              <a
                href="https://www.instagram.com/prometeo.iitj"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={40} color="#FFFFFF" />
              </a>
            </div>
          </div> */}
          
          <Modal isModalOpen={isModalOpen} closeModal={closeModal} />
        </div>
      {/*  )} */}
    </>
  );
};

export default Home;
