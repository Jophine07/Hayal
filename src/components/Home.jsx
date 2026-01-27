import "../Home.css";

export default function Home() {
  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div>
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
      <section className="py-5 bg-light">
        <div className="container px-3">
          <h2 className="text-center fw-bold section-title animate-fade-up">
            Our Services
          </h2>

          <div className="row g-4 mt-3">
            <div className="col-12 col-md-4">
              <div className="card h-100 shadow-sm text-center animate-card">
                <div className="card-body">
                  <h5>Corporate Events</h5>
                  <p>Conferences, meetings, and product launches.</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100 shadow-sm text-center animate-card delay-1">
                <div className="card-body">
                  <h5>Weddings</h5>
                  <p>Elegant wedding planning tailored to your vision.</p>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-4">
              <div className="card h-100 shadow-sm text-center animate-card delay-2">
                <div className="card-body">
                  <h5>Social Events</h5>
                  <p>Birthdays, parties, and private celebrations.</p>
                </div>
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

  {/* GMAIL – Opens Gmail directly */}
  <p className="mb-1">
    <i className="fa-solid fa-envelope me-2"></i>
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=hayaleventplants@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="contact-link"
    >
      hayaleventplants@gmail.com
    </a>
  </p>

  {/* INSTAGRAM */}
  <p className="mb-0">
    <i className="fa-brands fa-instagram me-2 instagram-icon"></i>
    <a
      href="https://www.instagram.com/hayaleventplants?utm_source=qr&igsh=MXJvMGgzOXZ6MXhoMQ=="
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

              <p className="mb-2">
                👤 <strong>AJMAL ALIKHAN O.S</strong><br />
                📞{" "}
                <a href="tel:8113973059" className="contact-link">
                  8113973059
                </a>
              </p>

              <p className="mb-0">
                👤 <strong>SUKANYA</strong><br />
                📞{" "}
                <a href="tel:8921113059" className="contact-link">
                  8921113059
                </a>
              </p>
            </div>

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
  );
}
