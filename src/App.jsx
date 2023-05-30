import './App.css';
import ButtonPrimary from './components/Button/ButtonPrimary/Button';
import ButtonSecond from './components/Button/ButtonSecond/Button';

function App() {
  return (
    <>
      <ButtonPrimary style={'btn-register'}>Register</ButtonPrimary>
      <ButtonSecond style={'btn-login'}>Login</ButtonSecond>
    </>
  );
}

export default App;
