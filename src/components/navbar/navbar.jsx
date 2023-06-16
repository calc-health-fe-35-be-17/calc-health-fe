import { Container, Nav, Navbar, NavLink } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ButtonSecond from '../button/button-second/button';
import ButtonPrimary from '../button/button-primary';
import './navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { logoutAction } from '../../redux/login/loginAction';

export default function NavigationBar() {
  const user = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logoutAction())
  }

  return (
    <Navbar collapseOnSelect expand="sm" className="p-0">
      <Container fluid>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-target="#navbarScroll"
        />

        <Navbar.Collapse id="navbarScroll" className="justify-content-between">
          <Navbar.Brand>
            <NavLink eventKey="1" as={Link} to="/">
              <img src="/images/logo.png" alt="" width={100} height={70} />
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
            {
              !user.user ?
                <>
                  <NavLink eventKey="6" as={Link} to="/login">
                    <ButtonSecond style="btn-login">Sign In</ButtonSecond>
                  </NavLink>
                  <NavLink eventKey="7" as={Link} to="/register">
                    <ButtonPrimary style="btn-register">Sign Up</ButtonPrimary>
                  </NavLink>
                </> :
                <>
                  <ButtonPrimary style="btn-register" onClick={logOut}>Log out</ButtonPrimary>
                </>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
