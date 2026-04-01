import { Link, useLocation } from "react-router-dom";

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
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3 fixed-top">
      
      <Link className="navbar-brand fw-bold" to="/">
        HAYAL EVENTS
      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto align-items-lg-center">

          <li className="nav-item">
            <button className="nav-link btn btn-link text-white"
              onClick={() => handleScroll("home")}>
              Home
            </button>
          </li>

          <li className="nav-item">
            <button className="nav-link btn btn-link text-white"
              onClick={() => handleScroll("about")}>
              About
            </button>
          </li>

          <li className="nav-item">
            <button className="nav-link btn btn-link text-white"
              onClick={() => handleScroll("services")}>
              Services
            </button>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/events">Events</Link>
          </li>

          <li className="nav-item">
            <button className="nav-link btn btn-link text-white"
              onClick={() => handleScroll("contact-section")}>
              Contact
            </button>
          </li>

          {/* CONTACT NUMBER */}
          <li className="nav-item ms-lg-3 mt-2 mt-lg-0">
            <a href="tel:8113973059" className="btn btn-warning">
              📞 8113973059
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;