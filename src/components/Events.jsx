import React from "react";
import "../Events.css";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="event-wrapper d-flex align-items-center justify-content-center">

      <div className="no-events-container text-center">

        <h1 className="no-events-title">
          No Events Currently
        </h1>

        <p className="no-events-text">
          We don’t have any upcoming events at the moment.  
          Stay connected with <span className="brand-highlight">HAYAL EVENTS</span> for future updates.
        </p>

        {/* ✅ BACK BUTTON (IMPROVED) */}
        <div className="mt-4">
          <Link to="/" className="home-btn-primary">
            ← Back to Home
          </Link>
        </div>

      </div>

    </div>
  );
};

export default Events;