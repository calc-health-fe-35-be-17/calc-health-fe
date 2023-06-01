import { Col, Container, Row } from 'react-bootstrap';
import ButtonPrimary from './components/Button/ButtonPrimary/Button';
import ButtonSecond from './components/Button/ButtonSecond/Button';
import CardFood from './components/Card/CardFood';
import { foodCard } from './fakers/index';
import './App.css';

function App() {
  return (
    <>
      <ButtonPrimary style={'btn-register'}>Register</ButtonPrimary>
      <ButtonSecond style={'btn-login'}>Login</ButtonSecond>

      {/* <Container>
        <Row>
          {foodCard.map((food, index) => (
            <Col xs={12} sm={6} md={6} lg={4} key={index}>
              <CardFood
                img={food.img}
                title={food.title}
                calori={food.nutrition.kalori}
                carbon={food.nutrition.carbon}
              />
            </Col>
          ))}
        </Row>
      </Container> */}
    </>
  );
}

export default App;
