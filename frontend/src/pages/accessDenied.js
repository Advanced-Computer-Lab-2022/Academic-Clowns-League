import React, { useContext, useState } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';


const AccessDenied = () => {

  const navigate = useNavigate();



  return (
<div
    style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}
  >



<MDBCardImage src="danger.png"
                    alt="Access Restricted" className="my-5" style={{ width: '150px' }} fluid />


    <h1>Access Denied</h1>



      <MDBBtn rounded
        style={{
          color: "white",
          height: 35,
          textAlign: "center",
          borderColor: "#78909C"
        }}
        onClick={() => navigate(-1)}
        color="danger"
      >
        Back
      </MDBBtn> 





      <MDBBtn rounded
        style={{
          color:"white",
          height: 35,
          textAlign: "center",
          marginLeft: 10,
          borderColor: "#78909C"
        }}
        onClick={() => navigate(`login`)}
        color="danger"
      >
        Login As a Different User
      </MDBBtn> 


  </div>

  );
};

export default AccessDenied;
