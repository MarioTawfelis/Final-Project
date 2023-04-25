import { useState } from "react";
import { MDBBtn, MDBInput, MDBCol, MDBTypography } from "mdb-react-ui-kit";
import {MDBIcon} from "mdb-react-ui-kit";

function PriceSelector() {
  const [price, setPrice] = useState(1);

  const decreasePrice = () => {
    if (price > 0) {
      setPrice(price - 1);
    }
  };

  const increasePrice = () => {
    setPrice(price + 1);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <>
      <MDBCol
        md="3"
        lg="3"
        xl="2"
        className="d-flex align-items-center justify-content-around"
      >
        <MDBBtn color="link" className="px-2" onClick={decreasePrice}>
          <MDBIcon fas icon="minus" />
        </MDBBtn>
        <MDBInput min={0} value={price} type="number" size="sm" onChange={handlePriceChange} />
        <MDBBtn color="link" className="px-2" onClick={increasePrice}>
          <MDBIcon fas icon="plus" />
        </MDBBtn>
      </MDBCol>
      <MDBCol md="3" lg="2" xl="2" className="offset-lg-1">
        <MDBTypography tag="h5" className="mb-0">
          {''}
        </MDBTypography>
      </MDBCol>
    </>
  );
}

export default PriceSelector;
