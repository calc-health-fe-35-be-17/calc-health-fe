import './register.css';
import ButtonPrimary from '../../components/button/button-primary';
import { Container, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
      <Container className="my-5">
        <Row className="flex-column justify-content-center align-items-center gap-lg-5">
          <h1 className="title-register text-center">Welcome to Calc Health</h1>
          <div className="form-container rounded">
            <Form>
              <Form.Group className="mb-4">
                <Form.Label className="label">Nama Depan</Form.Label>
                <Form.Control
                  className="form-input input"
                  type="text"
                  placeholder=""
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label">Nama Belakang</Form.Label>
                <Form.Control
                  className="form-input input"
                  type="text"
                  placeholder=""
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label">Email</Form.Label>
                <Form.Control
                  className="form-input input"
                  type="email"
                  placeholder=""
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label">Password</Form.Label>
                <Form.Control
                  className="form-input input"
                  type="password"
                  placeholder=""
                />
                <Form.Text className="mb-4" muted>
                  Minimal 8 karakter
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label">Konfirmasi Password</Form.Label>
                <Form.Control
                  className="form-input input"
                  type="password"
                  placeholder=""
                />
              </Form.Group>
              <Form.Group className="w-75">
                <Form.Check
                  className="form-check check"
                  type="radio"
                  label="Saya setuju dengan Syarat & Kententuan dan Kebijakan Privasi"
                />
              </Form.Group>
              <div className="daftar d-flex justify-content-center align-items-center my-4">
                <ButtonPrimary style="daftar w-50 py-2">DAFTAR</ButtonPrimary>
              </div>
              <div className="buttonlogin text-end">
                <Form.Text>
                  Sudah punya akun? <Link to="/login">Login</Link>
                </Form.Text>
              </div>
            </Form>
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Register;