import Form from 'react-bootstrap/Form';
import './Login.css';
import ButtonPrimary from '../../components/button/button-primary';
import ButtonSecond from '../../components/button/button-second/button';
import { Col, Container, Row } from 'react-bootstrap';
import { InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
//import axios from 'axios';
import { getDataLogin } from '../../redux/login/loginAction';

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (email.trim() === '') {
      newErrors.email = 'Email should not be empty';
      isValid = false;
    }

    if (password.trim() === '') {
      newErrors.password = 'Password should not be empty';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    if(validateForm()) {
      const userData = {
        email: email,
        password: password
      };

      try {
        const response = await dispatch(getDataLogin(userData));
  
        if (response.payload.success) {
          console.log('Login successful');
          navigate('/');
        } else {
          console.error('Login error:', response.payload.message);
          setErrors({ password: 'Invalid email or password' });
        }
      } catch (error) {
        console.error('Login error:', error);
        setErrors({ password: 'An error occurred during login' });
      }
    }

  };

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
            <Form className="w-100 d-flex flex-column gap-4" onSubmit={handleSubmit}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                  <Form.Control
                    placeholder="Email"
                    aria-label="Email"
                    aria-describedby="basic-addon1"
                    type="email"
                    value={email}
                    onChange={handleEmail}
                  />
                </InputGroup>
                {errors.email && <span className="text-danger">{errors.email}</span>}
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
                    value={password}
                    onChange={handlePassword}
                  />
                </InputGroup>
                {errors.password && <span className="text-danger">{errors.password}</span>}
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
