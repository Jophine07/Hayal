import { Link, useLocation } from "react-router-dom";
import "../Navbar.css";
const Navbar = () => {
  const location = useLocation();

  const handleScroll = (id) => {
    if (location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg custom-navbar px-4 fixed-top">

   {/* LOGO */}
<Link className="navbar-brand d-flex align-items-center" to="/">
  <img 
    src="/logo.png" 
    alt="Hayal Events Logo" 
    className="navbar-logo"
  />
</Link>

      {/* TOGGLE */}
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      {/* NAV */}
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">

          <li className="nav-item">
            <button className="nav-link nav-btn"
              onClick={() => handleScroll("home")}>
              Home
            </button>
          </li>

          <li className="nav-item">
            <button className="nav-link nav-btn"
              onClick={() => handleScroll("about")}>
              About
            </button>
          </li>

          <li className="nav-item">
            <button className="nav-link nav-btn"
              onClick={() => handleScroll("services")}>
              Services
            </button>
          </li>

          <li className="nav-item">
            <Link className="nav-link nav-btn" to="/events">Events</Link>
          </li>

          <li className="nav-item">
            <button className="nav-link nav-btn"
              onClick={() => handleScroll("contact-section")}>
              Contact
            </button>
          </li>

          {/* CALL BUTTON */}
          <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
            <a href="tel:8113973059" className="call-btn">
              📞 8113973059
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;