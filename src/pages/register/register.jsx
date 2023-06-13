import './register.css';
import ButtonPrimary from '../../components/button/button-primary';
import { Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { addData, getDataUser } from '../../redux/register/registerAction';

function Register() {
  const dispatch = useDispatch()
  const { isLoading } = useSelector((state) => state.userReducer)
  const [ inputNamaDepan, setInputNamaDepan ] = useState("")
  const [ inputNamaBelakang, setInputNamaBelakang ] = useState("")
  const [ inputUmur, setInputUmur ] = useState("")
  const [ inputGender, setInputGender ] = useState("")
  const [ inputTB, setInputTB ] = useState("")
  const [ inputBB, setInputBB ] = useState("")
  const [ inputEmail, setInputEmail ] = useState("")
  const [ inputPassword, setInputPassword ] = useState("")
  const [ inputKonfirmasi, setInputKonfirmasi ] = useState("")
  const navigate = useNavigate()

  
  const handleSubmit = (e) => {
    e.preventDefault();
    let newData = {
      namaDepan : inputNamaDepan,
      namaBelakang : inputNamaBelakang,
      umur : inputUmur,
      gender : inputGender,
      tb : inputTB,
      bb : inputBB,
      email : inputEmail,
      password : inputPassword,
      konfirmasiPassword : inputKonfirmasi,
    }

    if(inputNamaDepan === '' || inputNamaBelakang === '' || inputUmur === '' || inputGender === '' || inputTB === '' || inputBB === '' || inputEmail === '' || inputPassword === '' || inputKonfirmasi === ''){
      alert('Please fill out the entire form')
    }else if(inputKonfirmasi !== inputPassword){
      alert('Your password does not match')
    }else{
      dispatch(addData(newData))
      setInputNamaDepan("")
      setInputNamaBelakang("")
      setInputUmur("")
      setInputGender("")
      setInputTB("")
      setInputBB("")
      setInputEmail("")
      setInputPassword("")
      setInputKonfirmasi("")
      alert('Register success')
      navigate('/login')
    }

  }

  useEffect(() => {
    dispatch(getDataUser());
  }, []);

  return (
    <>
      <Container className="my-5">
        <Row className="flex-column justify-content-center align-items-center gap-lg-5">
          <h1 className="title-register text-center">Welcome to Calc Health</h1>
          <div className="form-container rounded">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-4">
                <Form.Label className="label">Nama Depan</Form.Label>
                <Form.Control
                  className="form-input input"
                  type="text"
                  placeholder=""
                  value={inputNamaDepan}
                  onChange={(e) => setInputNamaDepan(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label">Nama Belakang</Form.Label>
                <Form.Control
                  className="form-input input"
                  type="text"
                  placeholder=""
                  value={inputNamaBelakang}
                  onChange={(e) => setInputNamaBelakang(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label">Umur</Form.Label>
                <Form.Control
                  className="form-input input"
                  type="number"
                  placeholder=""
                  value={inputUmur}
                  onChange={(e) => setInputUmur(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label">Gender</Form.Label>
                <Form.Control
                  className="form-input input"
                  type="text"
                  placeholder=""
                  value={inputGender}
                  onChange={(e) => setInputGender(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label">Tinggi Badan</Form.Label>
                <Form.Control
                  className="form-input input"
                  type="number"
                  placeholder=""
                  value={inputTB}
                  onChange={(e) => setInputTB(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label">Berat Badan</Form.Label>
                <Form.Control
                  className="form-input input"
                  type="number"
                  placeholder=""
                  value={inputBB}
                  onChange={(e) => setInputBB(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label">Email</Form.Label>
                <Form.Control
                  className="form-input input"
                  type="email"
                  placeholder=""
                  value={inputEmail}
                  onChange={(e) => setInputEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Label className="label">Password</Form.Label>
                <Form.Control
                  className="form-input input"
                  type="password"
                  placeholder=""
                  value={inputPassword}
                  minLength={8}
                  onChange={(e) => setInputPassword(e.target.value)}
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
                  value={inputKonfirmasi}
                  minLength={8}
                  onChange={(e) => setInputKonfirmasi(e.target.value)}
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
      {isLoading}
    </>
  );
}

export default Register;