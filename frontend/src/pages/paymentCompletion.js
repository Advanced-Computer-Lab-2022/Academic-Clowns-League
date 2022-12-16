import { useEffect, useState } from "react"
import PaymentNavbar from "../components/paymentNavbar";
import { useNavigate } from "react-router-dom"
import Button from 'react-bootstrap/Button';

const PaymentCompletion = () => {
    const [error, setError] = useState("Course Successfully Purchased!");
    const navigate = useNavigate();
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    useEffect(() => {
        const updateCourses = async () => {
            const response = await fetch(`/api/itrainee/registercourse/?id=${id}`, {
                method: 'PATCH',
                headers: {
                  'Content-Type':'application/json'
                }
              });
            const json = response.json();
            console.log(json)
            if (!response.ok) {
                setError(json.error);
            }
        }
        updateCourses();
    }, [])

    return(
        <>
        <PaymentNavbar />
        <h1 className="purchase">{error}</h1>
        <Button variant="outline-danger" onClick={() => {navigate('/individualTraineeHome')}} className="purchase-button">Return to Homepage</Button>
        </>
    )
}

export default PaymentCompletion;