import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css'
import ButtonPrimary from '../components/Button/ButtonPrimary/Button';

function Register(){
    return(
        <>
            <h1>Welcome to Calc Health</h1>
            <div id='form'>
                <Form>
                    <Form.Group>
                        <Form.Label className="mb-3" controlId="namadepan" >Nama Depan</Form.Label><br/>
                        <Form.Control className='input' type='text' placeholder=''/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-3" controlId="namabelakang">Nama Belakang</Form.Label><br/>
                        <Form.Control className='input' type='text' placeholder='' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label><br/>
                        <Form.Control className='input' type="email" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label><br/>
                        <Form.Control className='input' type="password" placeholder="" />
                    </Form.Group>
                    <Form.Text id="passwordHelpBlock" muted>
                        Minimal 8 karakter
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Konfirmasi Password</Form.Label><br/>
                        <Form.Control className='input' type="password" placeholder="" />
                    </Form.Group>
                    <Form.Group className="check" controlId="formBasicCheckbox">
                        <Form.Check type="radio" id='check' label="Saya setuju dengan Syarat & Kententuan dan Kebijakan Privasi" />
                    </Form.Group>
                    <div className='buttondaftar'>
                        <ButtonPrimary style="daftar">DAFTAR</ButtonPrimary>
                    </div>
                    <div className='buttondaftar' id='login'>
                        <Form.Text>Sudah punya akun? <a href=''>Login</a> </Form.Text>
                    </div>
                </Form>
            </div>
        </>
    )
}

export default Register