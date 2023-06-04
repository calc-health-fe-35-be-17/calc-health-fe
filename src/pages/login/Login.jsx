import Form from 'react-bootstrap/Form';
import './Login.css';
import ButtonPrimary from '../../components/button/button-primary';
import ButtonSecond from '../../components/button/button-second/button';

function Login(){
    return(
        <>
            <div id='form'>
                <div>
                    <img src="/images/login4.png" alt="" />
                </div>
                <Form>
                    <div id='logo'>
                        <img src="/images/logo.png" alt="" />
                    </div>
                    <Form.Text id='textlogin'>Login</Form.Text>
                    <Form.Text id='textselamat'>Selamat datang di Calc Health</Form.Text>
                    {/* <h1>Login</h1> */}
                    {/* <p>Selamat datang di Calc Health</p> */}
                    <Form.Group className="mb-3" controlId="email">
                        <Form.Label className='label'>Email</Form.Label><br/>
                        <Form.Control className='input' type="email" placeholder="" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Password</Form.Label><br/>
                        <Form.Control className="input" type="password" placeholder="" />
                    </Form.Group>
                    <ButtonPrimary style="login" >LOGIN</ButtonPrimary>
                    <ButtonSecond style="signup" >SIGN UP</ButtonSecond>
                    {/* <div className="butondaftar">
                        <Button id='sign-up' variant='primary' type='submit'>
                            Sign Up
                        </Button>
                    </div> */}
                </Form>
            </div>
        </>
    )
}
export default Login;