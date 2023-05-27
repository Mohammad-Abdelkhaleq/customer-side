import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';


function Navigationbar() {
  let { logout } = useAuth0();
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9DRAkzhLQrArmc6Q3hl_fHmz3Jq_31Bki0g&usqp=CAU"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            Ticket ease
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>

            <Nav.Link href="#pricing">create a ticket</Nav.Link>
          </Nav>
          <Button variant="outline-warning" onClick={()=>logout()}>signout</Button>
        </Container>
      </Navbar>

    </div>
  );
}

export default Navigationbar;