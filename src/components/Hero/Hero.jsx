import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../Button/ButtonPrimary/Button';
import './Hero.css';

export default function Hero() {
  return (
    <Container>
      <Row className="hero">
        <Col lg={6} md={6} sm={12} className="hero-content mb-5">
          <h1>Calc Health</h1>
          <h3>Choise health food for the body and for the earth</h3>
          <p id="description">
            One Planet One Health, kami mengajak setiap orang untuk peduli
            terhadap kesehatan tubuh mereka dan juga kesehatan bumi dengan
            asupan gizi seimbang dari makanan yang mereka konsumsi dan dampak
            dari makanan yang mereka pilih
          </p>
          <Link to="/register">
            <ButtonPrimary style={'get-started'}>Get started</ButtonPrimary>
          </Link>
        </Col>
        <Col lg={6} md={6} sm={12} className="hero-image">
          <img src="/images/ilustration.png" alt="" />
        </Col>
      </Row>
    </Container>
  );
}
