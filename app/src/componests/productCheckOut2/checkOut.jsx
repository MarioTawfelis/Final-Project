import React from "react";
import PriceSelector from "../../../../Productcheckout/PriceSelcetor";
import {
  // MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { useEffect } from "react";
// import PriceSelector from '../Productcheckout/PriceSelcetor'
export default function ProductCards() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
    //   .catch (console.error("Hey, your UseEfferct is not working"));
      
  }, []);

  const handlePriceChange = (index, newPrice) => {
    setProducts((prevProducts) => {
      const updatedProducts = [...prevProducts];
      updatedProducts[index].selectedPrice = newPrice;
      return updatedProducts;
    });
  };
//remove all the index and change it to pk
return (
<section className="h-100" style={{ backgroundColor: "#eee" }}>
  <MDBContainer className="py-5 h-100">
    <MDBRow className="justify-content-center align-items-center h-100">
      <MDBCol md="10">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
            Shopping Cart
          </MDBTypography>
        </div>
        
        {products.map((product, index) => (
        <MDBCard  key={product.pk}  className="rounded-3 mb-4">
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3"  fluid
                      src={product.fields.image_url}
                      alt={product.fields.name}
                    />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
              <p className="lead fw-normal mb-2">{product.fields.name}</p>
               
              </MDBCol>
              
              <PriceSelector
                      price={product.fields.price}
                      selectedPrice={product.selectedPrice || product.fields.price}
                      onPriceChange={(newPrice) => handlePriceChange(index, newPrice)}
                    />

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
          </MDBCardBody>
        </MDBCard>
        ))}

        {/* <MDBCard className="rounded-3 mb-4">
          <MDBCardBody className="p-4">
            <MDBRow className="justify-content-between align-items-center">
              <MDBCol md="2" lg="2" xl="2">
                <MDBCardImage className="rounded-3" fluid
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-shopping-carts/img1.webp"
                  alt="Cotton T-shirt" />
              </MDBCol>
              <MDBCol md="3" lg="3" xl="3">
                <p className="lead fw-normal mb-2">Basic T-shirt</p>
                <p>
                  <span className="text-muted">Size: </span>M{" "}
                  <span className="text-muted">Color: </span>Grey
                </p>
              </MDBCol>
              <MDBCol md="3" lg="3" xl="2"
                className="d-flex align-items-center justify-content-around">
                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="minus" />
                </MDBBtn>

                <MDBInput min={0} defaultValue={2} type="number" size="sm" />

                <MDBBtn color="link" className="px-2">
                  <MDBIcon fas icon="plus" />
                </MDBBtn>
              </MDBCol>
              <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
                <MDBTypography tag="h5" className="mb-0">
                  $499.00
                </MDBTypography>
              </MDBCol>
              <MDBCol md="1" lg="1" xl="1" className="text-end">
                <a href="#!" className="text-danger">
                  <MDBIcon fas icon="trash text-danger" size="lg" />
                </a>
              </MDBCol>
            </MDBRow>
          </MDBCardBody>
        </MDBCard>  */}

 {/* <MDBCol md="2" lg="2" xl="2" className="mb-4">
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
            </MDBCol>  */}
      

         {/* <MDBCard className="mb-4">
          <MDBCardBody className="p-4 d-flex flex-row">
            <MDBInput label="Discound code" wrapperClass="flex-fill" size="lg" />
            <MDBBtn className="ms-3" color="warning" outline size="lg">
              Apply
            </MDBBtn>
          </MDBCardBody>
        </MDBCard> */}



        {/* <MDBCard>
          <MDBCardBody>
            <MDBBtn className="ms-3" color="warning" block size="lg">
              Apply
            </MDBBtn>
          </MDBCardBody>
        </MDBCard>  */}


      </MDBCol>
    </MDBRow>
  </MDBContainer>
</section>
);
}