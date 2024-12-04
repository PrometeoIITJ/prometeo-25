import React, { useEffect } from "react";
import "./theme.css";
import purpleStone from "../assets/purple-bottle.webp";
import bg from "../assets/theme/themeBg.webp";
import bgBottom from "../assets/theme/bgBottom.webp";
import textBg from "../assets/theme/textBg.jpeg";
import PageLoader from "../components/PageLoader";
import FadeIn from "../components/FadeIn";
import FadeInContent from "../components/FadeInContent";

const Theme = () => {
  const [content, setContent] = React.useState(true);
  const [loading, setLoading] = React.useState(true);

  const handleonclick = () => {
    setContent(!content);
    setVideo(!content);
  };
  const onclickclose = () => {
    setContent(!content);
  };

  // let container = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
    const navBarEle = document.getElementById("navbar");
    navBarEle.style.opacity = 1;
  });

  const IMAGES = [
    {
      id: "1",
      url: purpleStone,
    },
    {
      id: "2",
      url: bg,
    },
    {
      id: "3",
      url: bgBottom,
    },
    {
      id: "4",
      url: textBg,
    }
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

  return (
    <>
      {loading ? (
        <PageLoader />
      ) : (
        <FadeIn>
          <div className="theme-page">
            <div
              className="theme-container"
              style={{ backgroundImage: `url(${bg})` }}
            >
              <div className="blurLayer"></div>
              <div className="nordic-text">NORDIC</div>
              <div className="nights-text">NIGHTS</div>
              <div className="gradient"></div>
            </div>
            <div
              className="theme-content"
              style={{ backgroundImage: `url(${bgBottom})` }}
            >
              <div className="blurLayer_sec"></div>
              <div
                className="theme-text"
              >
                <p className="theme-detail">
                  In the enchanting dimension of Nordic Nights, we dive into innovation and technologies inspired by the northern lights. It celebrates a harmony between modernity and tradition where ideas illuminate the skies. In the spirit of technological advancements and sustainability, we explore a canopy of stars and serenity.
                </p>
                <p className="theme-detail">
                  It explores a magical dimension of transforming visions into realities.
                </p>
              </div>
              <div className="theme_video">
                <div className="video_play">
                  <iframe src="https://www.youtube.com/embed/tXr0-hL-Yes?si=1OjPE-Oz7MpEljn8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="video_text">
                  Imagine a vial, Filled to the Brim With the elixir of innovation, the epitome of knowledge, waiting for the worthy to find.
                  Entwined with the notion of the sacred golden period, it symbolizes the profound wisdom and enlightenment needed to overcome
                  the challenges the future will offer. In this race of innovators pursuing the sacred elixir, propel yourself towards technological
                  enlightenment with the help of Prometeo. Join our odyssey in pursuit of this 'Elixir of Life', as we sail through the unexplored
                  realms of technology, discovering new possibilities along the way. Prometeo 2024 aspires to elevate innovation, channeling creative
                  ideas towards an enhanced impact at the forefront of progress. Featuring a dynamic blend of talks, workshops, and competitions that
                  immerse participants in the vast world of emerging technology, Prometeo invites every thinker to set sail on an adventure of ideas,
                  collaboration and progress. Participate in one of the most anticipated tech-fests and prove yourself worthy for the ultimate reward.
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      )}
    </>
  );
};

export default Theme;
