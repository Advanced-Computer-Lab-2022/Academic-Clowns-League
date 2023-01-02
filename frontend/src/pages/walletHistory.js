import { useContext, useEffect, useState } from "react"
import PaymentNavbar from "../components/paymentNavbar";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { MDBBtn, MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBTable, MDBTableHead, MDBTableBody, MDBModalFooter} from 'mdb-react-ui-kit';
import { CurrencyContext } from "../contexts/CurrencyContext";

const WalletHistory = () => {
    //const [error, setError] = useState("Course Successfully Purchased!");
    const {currency, rate} = useContext(CurrencyContext)
    const navigate = useNavigate();
    const [basicModal, setBasicModal] = useState(true);


    return(
        <>
        <PaymentNavbar />
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1' id="successful-payment">
        <MDBModalDialog size='sm'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Wallet History</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={() => navigate("/instructorHome")}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody><MDBTable>
      <MDBTableHead>
        <tr>
          <th scope='col'>Month</th>
          <th scope='col'>Money Owed</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        <tr>
          <td>December</td>
          <td>{0*rate} {currency}</td>
        </tr>
      </MDBTableBody>
    </MDBTable>
    <MDBModalFooter>
              <MDBBtn color="danger" onClick={() => navigate("/instructorHome")} style={{marginRight: 35}}>Back to Homepage</MDBBtn>
            </MDBModalFooter>
    </MDBModalBody>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
        </>
    )
}

export default WalletHistory;