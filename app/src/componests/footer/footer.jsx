import React from "react";
import  { useEffect, useState } from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './footer.css';



export default function Footer() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      
      const response = await fetch("../../../categories.json");
      const data = await response.json();
      setCategories(data);
    };
    fetchCategories();
  }, []);


  return (
    // Render a footer element with a dark background and white text
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted footer ">
      {/* Render a section element for the footer */}

      <section className="footer-section">
        {/* Render a container element with text alignment */}

        <MDBContainer className="text-center text-md-start mt-5 footer-section-container">
          {/* Render a row element for the footer */}

          <MDBRow className="mt-4 footer-secion-row" >
            {/* Render a column element */}

            <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4 footer-section-logo " >
              {/* Render a logo */}

              <h6 className="footer_Logo ">
                <a
                  href="#"
                  style={{ textDecorationLine: "none", color: "white" }}
                  className="footer_logo"
                >
                  Foom
                </a>
              </h6>
              {/* Render social media icons */}

              <div className="social-section">
                <h6 className="Social_media ">Social Media</h6>
                <a href="#" className="me-1 fa-icon">
                  <MDBIcon fab icon="facebook-f" />
                </a>
                <a href="#" className="me-1 fa-icon">
                  <MDBIcon fab icon="twitter" />
                </a>
                <a href="#" className="me-1 fa-icon">
                  <MDBIcon fab icon="google" />
                </a>
                <a href="#" className="me-1 fa-icon">
                  <MDBIcon fab icon="instagram" />
                </a>
                <a href="#" className="me-1 fa-icon">
                  <MDBIcon fab icon="linkedin" />
                </a>
                <a href="#" className="me-1 fa-icon">
                  <MDBIcon fab icon="github" />
                </a>
              </div>
            </MDBCol>
            {/* Render a column element */}

            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-4 category footer-section-columns ">
              <h4 className="text-uppercase fw-bold mb-4 products">Products</h4>
              {/* Render links to product categories */}

              {categories.length > 0 && categories.map((category) => (
  <p key={category.pk}>
    <a href="#" className="text-reset items">
      {category.name}
    </a>
  </p>
))}
 
              {/* <p>
                <a href="#" className="text-reset items">
                  Essentials
                </a>
              </p>
              <p>
                <a href="#" className="text-reset items">
                  Bed & Bath
                </a>
              </p>
              <p>
                <a href="#" className="text-reset items">
                  Kitchen & Dining
                </a>
              </p>
              <p>
                <a href="#" className="text-reset items">
                  Clearance
                </a>
              </p>
              <p>
                <a href="#" className="text-reset items">
                  Deals
                </a>
              </p>
              <p>
                <a href="#" className="text-reset items">
                  Jeans
                </a>
              </p>
              <p>
                <a href="#" className="text-reset items">
                  Shirts
                </a>
              </p>
              <p>
                <a href="#" className="text-reset items">
                  New Arrivals
                </a>
              </p> */}
            </MDBCol>
            {/* Display links to Contact categories with the same style as the product section */}
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4 footer-section-columns ">
              <h4 className="text-uppercase fw-bold mb-4 products">Contact</h4>
              <p>
                <MDBIcon
                  color="secondary"
                  icon="home"
                  className="me-2 fa-icon"
                />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon
                  color="secondary"
                  icon="envelope"
                  className="me-2 fa-icon"
                />
                info@example.com
              </p>
              <p>
                <MDBIcon
                  color="secondary"
                  icon="phone"
                  className="me-2 fa-icon"
                />{" "}
                + 01 234 567 88
              </p>
              <p>
                <MDBIcon
                  color="secondary"
                  icon="print"
                  className="me-2 fa-icon"
                />{" "}
                + 01 234 567 89
              </p>
            </MDBCol>
            {/* Render links to help categories */}

            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4  footer-section-columns">
              <h4 className="text-uppercase fw-bold mb-4 products">Help</h4>
              <p>
                <MDBIcon color="secondary" className="me-2 " />
                <a href="#" className="text-reset items">
                  Support
                </a>
              </p>
              <p>
                <MDBIcon color="secondary" className="me-2" />
                <a href="#" className="text-reset items">
                  Sign Up
                </a>
              </p>
              <p>
                <MDBIcon color="secondary" className="me-2" />
                <a href="#" className="text-reset items">
                  Sign In
                </a>
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div 
        className="text-center p-4 copyright"
      
      >
        © 2023 Copyright:
        <a
          className="text-reset fw-bold"
          href="https://github.com/MarioTawfelis/Final-Project"
        >
          Code Crushers
        </a>
      </div>
    </MDBFooter>
  );
}
// export default footer();
