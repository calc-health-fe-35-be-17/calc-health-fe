import Form from 'react-bootstrap/Form';
import './Login.css';
import ButtonPrimary from '../../components/button/button-primary';
import ButtonSecond from '../../components/button/button-second/button';
import { Col, Container, Row } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Container fluid>
      <Row>
        <Col lg={6} md={6} sm={12} xs={12}>
          <div className="form-login d-flex flex-column justify-content-center align-items-center gap-4 mb-4">
            <div className="logo mt-4">
              <img src="/images/logo.png" alt="" width={100} height={70} />
            </div>
            <div className="title text-black text-start w-100">
              <h4>Login</h4>
              <p className="">Selamat datang di CalcHealth</p>
            </div>
            <Form className="w-100 d-flex flex-column gap-4">
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <Form.Control
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    type="email"
                  />
                </InputGroup>
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">🔒</InputGroup.Text>
                  <Form.Control
                    placeholder="******"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    type="password"
                  />
                </InputGroup>
              </Form.Group>
              <ButtonPrimary type="submit" style="py-2">
                Sign In
              </ButtonPrimary>
              <Link to="/register">
                <ButtonSecond type="submit" style="w-100 py-2">
                  Sign Up
                </ButtonSecond>
              </Link>
            </Form>
          </div>
        </Col>
        <Col lg={6} md={6} sm={12} xs={12} className="p-0">
          <div className="image-login text-end">
            <img src="/images/login4.png" alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
export default Login;
