import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';


function Navigationbar() {
  let { logout } = useAuth0();
  return (
    <div>

      <Navbar bg="dark" variant="dark" style={{margin:'0'}}>
        <Container>
          <Navbar.Brand href="#home">Ticketease</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">FAQ</Nav.Link>
          </Nav>
        </Container>
        <Button className='logoutButton'  style={{marginRight:'15%'}}  variant="outline-warning" onClick={()=>logout()}>signout</Button>

      </Navbar>





      {/* <Navbar bg="dark" variant="dark" className='ContainerNav'>
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://i.ibb.co/LQ1Xzbr/Screenshot-2023-05-24-133654-removebg-preview.png"
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
      </Navbar> */}

      {/* <>
        <div className="header">
          <div className="cont">
            <div className="navbar">
              <div className="logo">
                <img src="https://i.ibb.co/LQ1Xzbr/Screenshot-2023-05-24-133654-removebg-preview.png" alt="Logo" />
              </div>
              <div className="menu">
                <ul>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      LogIn As
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a class="dropdown-item" href="#">Action</a>
                      <a class="dropdown-item" href="#">Another action</a>
                      <a class="dropdown-item" href="#">Something else here</a>
                    </div>            </li>

                </ul>
              </div>
            </div>
          </div>
        </div>
      </> */}

    </div>






  );
}

export default Navigationbar;