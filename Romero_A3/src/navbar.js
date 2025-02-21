import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import loalogo from "./loalogo.png";
import background from "./loa-backg.jpg";

// Navbar Component
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src={loalogo}
            alt="Lyceum of Alabang Logo"
            width="80"
            height="50"
            className="d-inline-block align-text-top me-2"
          />
          <h3 className="d-inline-block">Lyceum of Alabang</h3>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Hymn">
                Lyceum Hymn
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="coursesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Programs Offered
              </a>
              <ul className="dropdown-menu" aria-labelledby="coursesDropdown">
                <li>
                  <a className="dropdown-item" href="#">
                    BS Elementary Education
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BS Secondary Education (English, Filipino, Math)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BS Psychology
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BS Computer Engineering
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BS Industrial Engineering
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BS Information Technology
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BS Computer Science
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BS Criminology
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BS Business Administration (Marketing, Financial, HRDM)
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BS Hospitality Management
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BS Tourism Management
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    BS Real Estate Management
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    TESDA Accredited Training Center
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    TESDA Assessment Center
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Bachelor of Technical Vocational for Teacher Education
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

// Home Component
function Home() {
  return (
    <div
      className="home-container d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
      }}
    >
      <div className="p-5 bg-light text-dark rounded shadow-lg w-75 text-center">
        <div className="row mt-4">
          <div className="col-md-4">
            <h3>PHILOSOPHY</h3>
            <p>
              An institution that provides quality and relevant instruction and
              innovation for the next generation to improve the lives of
              individuals; physically, emotionally, morally, and spiritually
              adhere to the principle of God.
            </p>
          </div>
          <div className="col-md-4">
            <h3>VISION</h3>
            <p>
              Lyceum of Alabang envisions becoming one of the nation’s leading
              educational institutions involved in the pursuit and advancement
              of knowledge, skills, and values for personal, community and
              national development.
            </p>
          </div>
          <div className="col-md-4">
            <h3>MISSION</h3>
            <p>
              Lyceum of Alabang shall provide world-class education and training
              through competent personnel, high-end facilities, advanced
              technology, and equipment and accredited curricula of
              industry-based courses.
            </p>
          </div>
        </div>
        <Link to="/contact" className="custom-button mt-4">
          Learn More
        </Link>
      </div>
    </div>
  );
}

// Contact Component
function Contact() {
  return (
    <div className="container">
      <h2>Contact Us</h2>
      <p>If you have any questions, feel free to reach out to us:</p>
      <ul>
        <li>Email: info@lyceumofalabang.edu.ph</li>
        <li>Phone: +63 123 456 7890</li>
        <li>Address: Alabang, Muntinlupa City, Philippines</li>
      </ul>
    </div>
  );
}

// About Us Component
function AboutUs() {
  return (
    <div className="container">
      <h1>
        <center>Mission</center>
      </h1>
      <p>
        Lyceum of Alabang shall provide world-class education and training
        through competent personnel, high-end facilities, advanced technology,
        and equipment and accredited curricula of industry-based courses.
      </p>
      <h1>
        <center>Vision</center>
      </h1>
      <p>
        Lyceum of Alabang envisions becoming one of the nation’s leading
        educational institutions involved in the pursuit and advancement of
        knowledge, skills, and values for personal, community and national
        development.
      </p>
      <h1>
        <center>Quality Policy</center>
      </h1>
      <p>
        We, at the Lyceum of Alabang commit ourselves to exceed the expectations
        of our stakeholders through contiual improvement for effective and
        efficient provision of quality education and training. We will ensure
        that all academic and non-academic processes and activities are aligned
        with their voice.
      </p>
    </div>
  );
}

function Hymn() {
  return (
    <div className="container">
      <h1>Lyceum Hymn</h1>
      <p>
        <b>
          <center>i</center>
        </b>
      </p>
      <p>
        <center>
          <br />
          We are proud of you Alma Mater Lyceum of Alabang bearer of knowledge
          and <br />
          goodness of love that we can share to our countrymen.
        </center>
      </p>
      <p>
        <b>
          <center>Refrain</center>
        </b>
        <br />
        <center>
          <br />
          Lyceum of Alabang The name we will remember we’re raising your banner
          on high For better life and noble one.
        </center>
      </p>
      <p>
        <b>
          <center>ii</center>
        </b>
        <center>
          Let us sing the song of God’s glory wtih all our dignity sharing
          moment to everyone And make believe the joyful one.
        </center>
        <br />
      </p>
      <p>
        <b>
          <center>Repeat Refrain</center>
        </b>
        <br />
        <center>For better life and noble one. (2x)</center>
      </p>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="bg-body-tertiary text-center py-2 mt-5">
      <div className="container">
        <p className="mb-1">
          <Link to="/contact" className="text-decoration-none me-3">
            Contact Us
          </Link>
          <Link to="/about" className="text-decoration-none">
            About Us
          </Link>
        </p>
        <p className="mb-0">&copy; Lyceum of Alabang. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

// App Component (Main)
function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/Hymn" element={<Hymn />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
