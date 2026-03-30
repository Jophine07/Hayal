import React from "react";
import "../Events.css";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="event-wrapper">

      {/* HERO SECTION */}
      <div className="event-hero">
        <h1>
          Time, Team & Clients:<br />
          Event Management Essentials
        </h1>

        <div className="event-badge">
            <Link to="/" className="btn btn-outline-light">
                            HOME
                          </Link></div>
      </div>

      {/* EVENT DETAILS */}
      <div className="event-details">
        <div className="left">
          <h2>
            Work Culture in Event Management <br />
            Things Every Fresher Should Remember
          </h2>
        </div>

        <div className="right">
          <h2>4TH APRIL 2026</h2>
          <p>Sri C Achutha Menon Govt College, Thrissur</p>
          <p>10 AM – 12:30 PM</p>
        </div>
      </div>

      {/* TOPICS */}
      <div className="topics">
      <div><b><h4>AGENDA:</h4></b></div>
        <div> Growth Tactics</div>
        <div> Professional Skills</div>
        <div> Client Interaction</div>
      </div>

      {/* SPEAKER */}
      <div className="speaker">
        <h3>Resource Person</h3>
        <h2>Ms. Anupama Devan</h2>
        <p>HRM Mentor</p>
      </div>

    </div>
  );
};

export default Events;