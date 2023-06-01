import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ButtonSecond from '../Button/ButtonSecond/Button';
import ButtonPrimary from '../Button/ButtonPrimary/Button';

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="sm" className="p-0">
      <Container fluid>
        <Navbar.Toggle
          aria-aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <Navbar.Brand>
            <NavLink eventKey="1" as={Link} to="/">
              <img src="/images/logo.png" alt="" width={80} height={70} />
            </NavLink>
          </Navbar.Brand>
          <Nav className="align-items-center p-0 nav-item">
            <NavLink eventKey="1" as={Link} to="/">
              Home
            </NavLink>
            <NavLink eventKey="2" as={Link} to="/makanan">
              Makanan
            </NavLink>
            <NavLink eventKey="3" as={Link} to="/trackdiet">
              Track Diet
            </NavLink>
            <NavLink eventKey="4" as={Link} to="/trackcalori">
              Track Calori
            </NavLink>
            <NavLink eventKey="5" as={Link} to="/trackcarbon">
              Track Carbon
            </NavLink>
            <NavLink eventKey="6" as={Link} to="/login">
              <ButtonSecond style="btn-login">Sign In</ButtonSecond>
            </NavLink>
            <NavLink eventKey="7" as={Link} to="/register">
              <ButtonPrimary style="btn-register">Sign Up</ButtonPrimary>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
