import { Container } from 'react-bootstrap';
import NavBack from './../../components/nav-back/nav-back';
import FoodList from './partials/food-list';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './track-carbon.css';

export default function TrackCarbon() {
  return (
    <div className="track-carbon__wrapper">
      <Container>
        <NavBack />
        <p className="my-5 carbon-description">
          Berikut Dampak karbon yang dihasilkan dari makanan yang kamu makan
          hari ini
        </p>
        <div className="box-carbon-calculate w-100 d-flex flex-column gap-5 justify-content-center align-items-center py-5 rounded-4">
          <ProgressBar
            now={30}
            variant={'success'}
            className="carbon-food-bar w-25"
          />
          <h2 className="carbon-food-text">
            1.60{' '}
            <span className="unit">
              KgCO<span className="unit_2">2</span>
            </span>
          </h2>
        </div>
        <div className="tips w-50">
          <p className="text-tips">
            <span className="tips">Tips: </span>Kurangi makanan yang yang
            berasal dari hewani karena daging merupakan penyumbang emisi carbon
            terbesar
          </p>
        </div>
        <FoodList />
      </Container>
    </div>
  );
}
