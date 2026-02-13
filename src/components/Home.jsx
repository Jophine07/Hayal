import { useState } from "react";
import "../Home.css";

export default function Home() {

  const [showBanner, setShowBanner] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const handlePersonClick = (name) => {
    console.log("clicked:", name);   // 👈 DEBUG LINE
    setActivePerson(name);
  };

  const [activePerson, setActivePerson] = useState(null);


  const handleRibbonClick = () => {
    setShowBanner(true);
  };

  return (
    <div>

      {/* CENTER INAUGURATION BUTTON */}
      {!showBanner && (
        <div className="center-ribbon-wrapper">
          <button className="center-ribbon-btn" onClick={handleRibbonClick}>
            🎀 Grand Inauguration
          </button>
        </div>
      )}

      {/* CONFETTI EFFECT */}
      {showBanner && <div className="confetti"></div>}

      {/* INAUGURATION BANNER */}
      {showBanner && (
        <div className="inauguration-banner">
          🎉 HAYAL EVENTS – Since 2026 🎉
        </div>
      )}

      {/* WRAPPER FOR BLUR EFFECT */}
      <div className={`content-wrapper ${!showBanner ? "blurred" : "revealed"}`}>

        {/* HERO */}
        <section className="hero d-flex align-items-center text-center">
          <div className="container text-white px-3">
            <h1 className="brand-title animate-fade-up">
              HAYAL EVENTS
            </h1>

            <p className="brand-tagline animate-fade-up delay-1">
              Transforming Your "HAYAL" into a Celebration
            </p>

            <p className="brand-location animate-fade-up delay-2">
              📍 Thrissur, Kerala
            </p>

            <div className="d-flex justify-content-center animate-fade-up delay-3">
              <button
                className="btn btn-warning btn-lg mt-4 px-5"
                onClick={scrollToContact}
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="py-5">
          <div className="container text-center px-3 animate-fade-up">
            <h2 className="fw-bold section-title">Who We Are</h2>
            <p className="mt-3 mx-auto about-text">
              HAYAL EVENTS is a professional event management company based in
              Thrissur, delivering seamless, creative, and reliable event solutions
              for corporate events, weddings, and premium celebrations.
            </p>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-5 services-section">
          <div className="container px-3">
            <h2 className="text-center fw-bold section-title animate-fade-up">
              Our Services
            </h2>

            <p className="text-center text-muted mt-2">
              Premium solutions tailored for every celebration.
            </p>

            <div className="row g-4 mt-4 justify-content-center">
              <div className="col-12 col-md-4">
                <div className="service-box animate-card">
                  <div className="service-icon">🏢</div>
                  <h5>Corporate Events</h5>
                  <p>Conferences, meetings, and product launches.</p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="service-box animate-card delay-1">
                  <div className="service-icon">💍</div>
                  <h5>Weddings</h5>
                  <p>Elegant wedding planning tailored to your vision.</p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="service-box animate-card delay-2">
                  <div className="service-icon">🎉</div>
                  <h5>Social Events</h5>
                  <p>Birthdays, parties, and private celebrations.</p>
                </div>
              </div>
            </div>

            <div className="row g-4 mt-3 justify-content-center">
              <div className="col-12 col-md-4">
                <div className="service-box animate-card delay-3">
                  <div className="service-icon">🎂</div>
                  <h5>Cake Baking</h5>
                  <p>Handmade custom cakes designed for your theme.</p>
                </div>
              </div>

              <div className="col-12 col-md-4">
                <div className="service-box animate-card delay-4">
                  <div className="service-icon">🥗</div>
                  <h5>Dietitian Consultation</h5>
                  <p>
                    Personalized nutrition guidance and healthy meal planning for your lifestyle.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section className="py-5">
          <div className="container px-3">
            <h2 className="text-center fw-bold section-title animate-fade-up">
              How We Work
            </h2>

            <div className="row g-4 text-center mt-3">
              <div className="col-12 col-md-3 animate-card">
                <h6>Consultation</h6>
                <p>Understanding your requirements.</p>
              </div>
              <div className="col-12 col-md-3 animate-card delay-1">
                <h6>Planning</h6>
                <p>Detailed planning & coordination.</p>
              </div>
              <div className="col-12 col-md-3 animate-card delay-2">
                <h6>Execution</h6>
                <p>Flawless event execution.</p>
              </div>
              <div className="col-12 col-md-3 animate-card delay-3">
                <h6>Delivery</h6>
                <p>Memorable event experience.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact-section" className="py-5 bg-dark text-white">
          <div className="container px-3">
            <div className="row g-4 text-center text-md-start">

              <div className="col-12 col-md-4">
                <h5 className="fw-bold">HAYAL EVENTS</h5>
                <p className="mb-1">Event Management Company</p>
                <p className="mb-1">📍 Thrissur, Kerala</p>

                <p className="mb-1">
                  📧 <a href="mailto:hayaleventplants@gmail.com" className="contact-link">
                    hayaleventplants@gmail.com
                  </a>
                </p>

                <p className="mb-1">
                  <i className="fa-brands fa-instagram me-2 instagram-icon"></i>
                  <a
                    href="https://www.instagram.com/hayaleventplants"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-link"
                  >
                    Hayal Event
                  </a>
                </p>
              </div>
              <div className="col-12 col-md-4">
  <h6 className="fw-bold">Contact Persons</h6>

  <div
    className="person-name"
    onClick={() => handlePersonClick("ajmal")}
  >
    👤 <strong>AJMAL ALIKHAN O.S</strong>
  </div>

  <div
    className="person-name mt-3"
    onClick={() => handlePersonClick("sukanya")}
  >
    👤 <strong>Dt. SUKANYA K R</strong>
  </div>
</div>

{activePerson && (
  <div className="profile-overlay" onClick={() => setActivePerson(null)}>
    <div className="profile-modal" onClick={(e) => e.stopPropagation()}>
      
      {activePerson === "ajmal" && (
       
        <>
          <img src="/ajmal.jpg" alt="Ajmal" />
          <h3>AJMAL ALIKHAN O.S</h3>
          <p className="role-text">Founder & Creative Head</p>
          <a href="tel:8113973059" className="call-btn">
            📞 8113973059
          </a>
        </>
      )}

      {activePerson === "sukanya" && (
        <>
          <img src="/sukanya.jpg" alt="Sukanya" />
          <h3>Dt. SUKANYA K R</h3>
          <p className="role-text">Founder & Managing Partner</p>
          <p className="role-text">Dietitian Consultant</p>
          <a href="tel:8921113059" className="call-btn">
            📞 8921113059
          </a>
        </>
      )}

    </div>
  </div>
)}

              <div className="col-12 col-md-4">
                <h6 className="fw-bold">Availability</h6>
                <p className="mb-1">Mon – Sun</p>
                <p className="mb-0">09:00 AM – 09:00 PM</p>
              </div>

            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="footer text-center py-3">
          <p className="mb-0">
            © {new Date().getFullYear()} HAYAL EVENTS. All Rights Reserved.
          </p>
        </footer>

      </div>
    </div>
  );
}
