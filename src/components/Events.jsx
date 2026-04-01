import React from "react";
import "../Events.css";
import { Link } from "react-router-dom";

const Events = () => {
  return (
    <div className="event-wrapper">

      {/* HERO */}
      <div className="event-hero">

        <div className="event-topbar">
          <Link to="/" className="home-btn">
            ← Back to Home
          </Link>
        </div>

        <div className="container text-center py-5">
          <h1 className="event-title">
            Time, Team & Clients
          </h1>
          <p className="event-subtitle">
            Event Management Essentials
          </p>

        
        </div>

      </div>

      {/* EVENT INFO */}
      <div className="container py-5">
        <div className="event-card row">

          <div className="col-md-6 p-4">
            <h3 className="info-title">
              Work Culture in Event Management
            </h3>
            <p>
              Things every fresher should understand about teamwork,
              clients, and execution in real-world event scenarios.
            </p>
          </div>

          <div className="col-md-6 p-4 info-right">
            <h4>📅 4th April 2026</h4>
            <p>📍 Sri C Achutha Menon Govt College, Thrissur</p>
            <p>⏰ 10 AM – 12:30 PM</p>
          </div>

        </div>
      </div>

      {/* AGENDA */}
      <div className="container py-4">
        <h4 className="section-heading text-center mb-4">AGENDA</h4>

        <div className="row text-center">
          <div className="col-md-4 mb-3">
            <div className="agenda-card">Growth Tactics</div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="agenda-card">Professional Skills</div>
          </div>

          <div className="col-md-4 mb-3">
            <div className="agenda-card">Client Interaction</div>
          </div>
        </div>
      </div>

      {/* SPEAKER */}
      <div className="speaker-section py-5">
        <div className="container text-center">
          <h5 className="speaker-label">Resource Person</h5>
          <h2 className="speaker-name">Ms. Anupama Devan</h2>
          <p className="speaker-role">HRM Mentor</p>
        </div>
      </div>

    </div>
  );
};

export default Events;