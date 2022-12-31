import { useEffect, useState } from "react"
import PaymentNavbar from "../components/paymentNavbar";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';
import { MDBBtn, MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBModalFooter,} from 'mdb-react-ui-kit';

const PaymentCompletion = () => {
    //const [error, setError] = useState("Course Successfully Purchased!");
    const navigate = useNavigate();
    const [basicModal, setBasicModal] = useState(true);
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    const toggleShow = () => setBasicModal(!basicModal);

        const updateCourses = async () => {
            const response = await fetch(`/api/itrainee/registercourse/?id=${id}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type':'application/json'
                }
              });
            const json = response.json();
            console.log(json)
            if (response.status == 200) {
                navigate("/individualTraineeHome")
            }
        }

    return(
        <>
        <PaymentNavbar />
        <MDBModal show={basicModal} setShow={setBasicModal} tabIndex='-1' id="successful-payment">
        <MDBModalDialog size='sm'>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Operation Successful!</MDBModalTitle>
              <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>Course Successfully Purchased!</MDBModalBody>

            <MDBModalFooter>
              <MDBBtn color="danger" onClick={updateCourses} style={{marginRight: 55}}>Back to Homepage</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
        </>
    )
}

export default PaymentCompletion;