import './App.css';
import Foods from './pages/foods';
import TrackDiet from './pages/track-diet/track-diet';
// import LandingPage from './pages/landing-page/landing-page';
// import { Col, Container, Row } from 'react-bootstrap';
// import ButtonPrimary from './components/Button/ButtonPrimary/Button';
// import ButtonSecond from './components/Button/ButtonSecond/button';
// import CardFood from './components/Card/CardFood';
// import { foodCard } from './fakers/index';
// import NavigationBar from './components/Navbar/Navbar';
// import FooterComponent from './components/Footer/footer';
// import Hero from './components/Hero/Hero';
// import ContentLandingPage from './components/Content/ContentLandingPage';
// import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      {/* <LandingPage /> */}
      <TrackDiet />

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
