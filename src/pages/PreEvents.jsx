import React from "react";
import "./PreEvents.css";
import PreEventsCard from "../components/PreEventsCard";
import FadeInContent from "../components/FadeInContent";
import WorkshopCard from "../components/WorkshopCard";
import bplan from "../assets/bplan.png";
function createEntry(e) {
  return (
    <FadeInContent key={e.id}>
      <PreEventsCard
        imgURL={e.image}
        eventName={e.name}
        eventTime={e.date}
        eventRegister={e.external_link}
        eventButton={e.prize ? e.prize : "Coming soon..."}
        workshop={e.type === "informal"}
        description={e.description}
        rule={e.rulebook ? e.rulebook : e.rulebook_url}
      />
    </FadeInContent>
  );
}
function createEntryForWorkshop(e) {

  
  return (
    <FadeInContent key={e.id}>
      <WorkshopCard
        imgURL={bplan}
        eventName={e.name}
        eventTime={e.date}
        eventRegister={e.external_link}
        eventButton={e.prize ? e.prize : "Coming soon..."}
        workshop={e.type === "informal"}

      />
    </FadeInContent>
  );
}

const PreEvents = (props) => {
  return (
    <div className="pre-events-main">
      <div className="pre-events-cards">
        {/* <h2 className="blink_warning pb-44 ">
          {props.workshop
            ? "Workshops are live now"
            : ""}{" "}
          
        </h2> */}
        <div className="pre-events-cards-x">
          {
            props.workshop ? (props.data
              .filter((e) => {
                return (
                  e.type === props.category.toLowerCase() ||
                  props.category === "All"
                );
              })
              .map(createEntryForWorkshop))
              :
              (props.data
                .filter((e) => {
                  return (
                    e.type === props.category.toLowerCase() ||
                    props.category === "All"
                  );
                })
                .map(createEntry))
          }
        </div>
      </div>
    </div>
  );
};

export default PreEvents;
