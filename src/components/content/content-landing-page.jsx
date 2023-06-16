import { Col, Container, Row } from 'react-bootstrap';
import ButtonPrimary from '../button/button-primary';
import { Link } from 'react-router-dom';
import './content.css';

export default function ContentLandingPage() {
  return (
    <Container>
      <div className="content-container">
        <Row>
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="d-flex flex-column gap-4 content"
          >
            <h3>Tracking Diet</h3>
            <p>
              Tracking diet memungkinkan kamu untuk memperoleh tips dan
              rekomendasi makanan yang sehat untuk diet dari hasil perhitungan
              kategori tubuh
            </p>
            <Link to={'/trackdiet'}>
              <ButtonPrimary style={'button'}>Track Diet</ButtonPrimary>
            </Link>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="d-flex justify-content-center image"
          >
            <img src="/images/diet.png" alt="" />
          </Col>
        </Row>
      </div>
      <div className="content-container">
        <Row>
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="d-flex justify-content-center image"
          >
            <img src="/images/calories.png" alt="" />
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="d-flex flex-column gap-4 content"
          >
            <h3>Tracking Kalori</h3>
            <p>
              Tracking kalori adalah kalkulator untuk menghitung berapa jumlah
              kalori yang Anda butuhkan dari makanan setiap hari, berdasarkan
              berat dan tinggi badan, usia, dan aktivitas Anda sehari - hari.
            </p>
            <Link to={'/trackcalori'}>
              <ButtonPrimary style={'button'}>Track Calori</ButtonPrimary>
            </Link>
          </Col>
        </Row>
      </div>
      <div className="content-container">
        <Row>
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="d-flex flex-column gap-4 content"
          >
            <h3>Tracking Carbon</h3>
            <p>
              Untuk mewujudkan One Planet One Health, terdapat firut Tracking
              karbondioksida dari hasil makanan yang dimakan sehari hari agar
              dapat memilikirkan juga kesehatan planet ini.
            </p>
            <Link to={'/trackcarbon'}>
              <ButtonPrimary style={'button'}>Track Carbon</ButtonPrimary>
            </Link>
          </Col>
          <Col
            lg={6}
            md={6}
            sm={12}
            xs={12}
            className="d-flex justify-content-center image"
          >
            <img src="/images/diet.png" alt="" />
          </Col>
        </Row>
      </div>
    </Container>
  );
}
