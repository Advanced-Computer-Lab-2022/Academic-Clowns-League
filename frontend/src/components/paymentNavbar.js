import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const PaymentNavbar = () => {
    return (
        <>
        <Navbar sticky="top"  variant="dark" expand="lg" style={{backgroundColor: '#C00418'}}>
        <Container fluid>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Canadian Chamber Of Commerce
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
        </Container>
      </Navbar>
    </>
    )
}

export default PaymentNavbar;