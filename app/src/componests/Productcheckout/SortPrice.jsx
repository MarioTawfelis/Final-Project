import { MDBTypography } from "mdb-react-ui-kit";

export function SortPrice(props) {
  return (
    <div className="d-flex justify-content-between align-items-center mb-4">
      <MDBTypography tag="h3" className="fw-normal mb-0 text-black">
        {props.title}
      </MDBTypography>
      <div>
        <p className="mb-0">
          <span className="text-muted">Sort by:</span>
          <a href="#!" className="text-body">
            {props.sortOption} <i className="fas fa-angle-down mt-1"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default SortPrice;

