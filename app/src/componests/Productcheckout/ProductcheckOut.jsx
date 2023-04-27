import React, { useState, useEffect } from "react";
// import PriceSelector from "./PriceSelector.jsx";
// import CustomCard from "../CustomCard";
import SortPrice from "./SortPrice.jsx";
import "../Productcheckout/productCheckOut.css";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

export default function ProductCards() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handlePriceChange = (index, newPrice) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].selectedPrice = newPrice;
      return updatedProducts;
    });
  };

  return (
    <section className="h-100" style={{ backgroundColor: "#eee" }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol md="10">
            <SortPrice />
            <MDBCol />
            {products.map((product, index) => (
              <CustomCard key={product.pk} className="rounded-3 mb-4">
                <CustomCard.body className="p-4">
                  <MDBRow className="justify-content-between align-items-center">
                    <MDBCol md="2" lg="2" xl="2">
                      <MDBCardImage
                        className="rounded-3"
                        fluid
                        src={product.fields.image_url}
                        alt={product.fields.name}
                      />
                    </MDBCol>
                    <MDBCol md="3" lg="3" xl="3">
                      <p className="lead fw-normal mb-2">
                        {product.fields.name}
                      </p>
                    </MDBCol>

                    <MDBCol
                      md="3"
                      lg="3"
                      xl="2"
                      className="d-flex align-items-center justify-content-around"
                    >
                      <PriceSelector
                        price={product.fields.price}
                        selectedPrice={
                          product.selectedPrice || product.fields.price
                        }
                        onPriceChange={(newPrice) =>
                          handlePriceChange(index, newPrice)
                        }
                      />
                    </MDBCol>

                    <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                      <MDBTypography tag="h5" className="mb-0">
                        ${product.selectedPrice || product.fields.price}
                      </MDBTypography>
                    </MDBCol>
                    <MDBCol md="1" lg="1" xl="1" className="text-end">
                      <a href="#!" className="text-danger">
                        <MDBIcon fas icon="trash text-danger" size="lg" />
                      </a>
                    </MDBCol>
                  </MDBRow>
                </CustomCard.body>
              </CustomCard>
            ))}
          </MDBCol>
          <MDBCol md="2" lg="2" xl="2" className="mb-4">
            <MDBCard>
              <MDBCardBody className="p-3">
                <MDBTypography tag="h5" className="mb-3">
                  Summary
                </MDBTypography>
                <MDBTypography tag="p" className="mb-2">
                  Total items: {products.length}
                </MDBTypography>
                <MDBTypography tag="p" className="mb-2">
                  Total: {price}
                </MDBTypography>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol md="4" lg="4" xl="4" className="mb-4">
            <MDBCard>
              <MDBCardBody className="p-3">
                <MDBInput
                  label="Discount code"
                  wrapperClass="flex-fill"
                  size="lg"
                  value={discountCode}
                  onChange={handleDiscountCodeChange}
                />
                <MDBBtn
                  className="ms-3"
                  color="warning"
                  outline
                  size="lg"
                  onClick={handleDiscountCodeApply}
                >
                  Apply
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
