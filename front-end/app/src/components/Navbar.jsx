import { useState, useEffect, useRef } from "react";
import { BsCart } from "react-icons/bs";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
import "../assets/styles/navbar.css";

function NavBar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (navbarOpen && ref.current && !ref.current.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, [navbarOpen]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className="navbar" ref={ref}>
        <a className="logo" href="#logo">
          <h1>Floom</h1>
        </a>
        {windowWidth <= 600 ? (
          <div className="iconContainer">
            <a className="Cart" href="#cart">
              <BsCart />
            </a>
            <button
              className="toggle"
              onClick={() => setNavbarOpen((prev) => !prev)}
            >
              {navbarOpen ? (
                <MdClose style={{ width: "32px", height: "32px" }} />
              ) : (
                <FiMenu style={{ width: "32px", height: "32px" }} />
              )}
            </button>
          </div>
        ) : (
          <ul className="nav">
            <li>
              <a className="nav-bar" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="nav-bar" href="#Our Products">
                Our Products
              </a>
            </li>
            <li>
              <a className="nav-bar" href="#Contact Us">
                Contact Us
              </a>
            </li>
            <li>
              <a className="Cart" href="#cart">
                <BsCart />
              </a>
            </li>
          </ul>
        )}
      </nav>
      {windowWidth < 600 && navbarOpen && (
        <nav className="mobile-nav">
          <div className="navContainer">
            <ul className="nav-bar">
              <li>
                <a
                  className="nav-bar"
                  href="#home"
                  onClick={() => setNavbarOpen(false)}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className="nav-bar"
                  href="#Our Products"
                  onClick={() => setNavbarOpen(false)}
                >
                  Our Products
                </a>
              </li>
              <li>
                <a
                  className="nav-bar"
                  href="#Contact Us"
                  onClick={() => setNavbarOpen(false)}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      )}
    </>
  );
}

export default NavBar;
