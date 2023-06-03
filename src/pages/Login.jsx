import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Login.css';

function Login(){
    return(
        <>
            <div id='img-login'>

            </div>
            <div id='form'>
                <h1>Login</h1>
                <p>Selamat datang di Calc Health</p>
                <Form>
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label>Email</Form.Label><br/>
                        <Form.Control className='input' type="email" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label><br/>
                        <Form.Control className="input" type="password" placeholder="" />
                    </Form.Group>
                    <div className="buttonlogin">
                        <Button id='login' variant="second" type='submit'>
                            Login
                        </Button>
                    </div>
                    <div className="butondaftar">
                        <Button id='sign-up' variant='primary' type='submit'>
                            Sign Up
                        </Button>
                    </div>
                </Form>
            </div>
        </>
    )
}
export default Login