import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Register.css'

function Register(){
    return(
        <>
            <div id='form'>
                <Form>
                    <Form.Group>
                        <Form.Label className="mb-3" controlId="namadepan" >Nama Depan</Form.Label><br/>
                        <Form.Control type='text' placeholder=''/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mb-3" controlId="namabelakang">Nama Belakang</Form.Label><br/>
                        <Form.Control type='text' placeholder='' />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label><br/>
                        <Form.Control type="email" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label><br/>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    <Form.Text id="passwordHelpBlock" muted>
                        Minimal 8 karakter
                    </Form.Text>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Konfirmasi Password</Form.Label><br/>
                        <Form.Control type="password" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="radio" label="Saya setuju dengan Syarat & Kententuan dan Kebijakan Privasi" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Daftar
                    </Button><br/>
                    <Form.Text>Sudah punya akun? Login</Form.Text>
                </Form>
            </div>
        </>
    )
}

export default Register