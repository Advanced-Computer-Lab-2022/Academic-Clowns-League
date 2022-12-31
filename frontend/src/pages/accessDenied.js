import React, { useContext, useState } from "react";
import { CurrencyContext } from "../contexts/CurrencyContext";
import { MDBBtn } from 'mdb-react-ui-kit';
import { useNavigate } from "react-router-dom";
import Stack from '@mui/material/Stack';

import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
const AccessDenied = () => {
  const navigate = useNavigate();
  return (
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={1} >
      <MDBCardImage src="danger.png" alt="Access Denied" className="my-5" style={{ width: '150px' }} fluid />
      <h1>Access Denied</h1>
      <br/>
      <br/>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={3} >
        <MDBBtn rounded style={{ color: "white", height: 35, textAlign: "center", borderColor: "#78909C" }} onClick={() => navigate(-1)} color="danger" >
          Back to Previous Page
        </MDBBtn>
        <MDBBtn rounded style={{ color: "white", height: 35, textAlign: "center", borderColor: "#78909C" }} onClick={() => navigate(`login`)} color="danger" >
          Login As a Different User
        </MDBBtn>
      </Stack>
    </Stack>
  );
};

export default AccessDenied;
