import React from "react";
import "../Events.css";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="event-wrapper container-fluid p-0">

      {/* HERO SECTION */}
      <div className="event-hero d-flex flex-column flex-md-row justify-content-between align-items-center p-4">
        
        <h1 className="text-center text-md-start">
          Time, Team & Clients:<br />
          Event Management Essentials
        </h1>

        <div className="event-badge mt-3 mt-md-0">
          <Link to="/" className="btn btn-outline-light">
            HOME
          </Link>
        </div>
      </div>

      {/* EVENT DETAILS */}
      <div className="event-details row g-0">

        <div className="left col-12 col-md-6 p-4 text-center text-md-start">
          <h2>
            Work Culture in Event Management <br />
            Things Every Fresher Should Remember
          </h2>
        </div>

        <div className="right col-12 col-md-6 p-4 text-center text-md-start">
          <h2>4TH APRIL 2026</h2>
          <p>Sri C Achutha Menon Govt College, Thrissur</p>
          <p>10 AM – 12:30 PM</p>
        </div>
      </div>

      {/* TOPICS */}
      <div className="topics container py-4">
        <div className="text-center mb-3">
          <h4><b>AGENDA:</b></h4>
        </div>

        <div className="row text-center">
          <div className="col-12 col-md-4 mb-2">Growth Tactics</div>
          <div className="col-12 col-md-4 mb-2">Professional Skills</div>
          <div className="col-12 col-md-4 mb-2">Client Interaction</div>
        </div>
      </div>

      {/* SPEAKER */}
      <div className="speaker text-center text-md-start p-4">
        <h3>Resource Person</h3>
        <h2>Ms. Anupama Devan</h2>
        <p>HRM Mentor</p>
      </div>

    </div>
  );
};

export default Events;