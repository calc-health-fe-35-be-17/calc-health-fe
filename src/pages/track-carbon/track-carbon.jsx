import { Container } from 'react-bootstrap';
import NavBack from './../../components/nav-back/nav-back';
import FoodList from './partials/food-list';
import ProgressBar from 'react-bootstrap/ProgressBar';
import { Link, useNavigate } from 'react-router-dom';
import ButtonPrimary from '../../components/button/button-primary/button';
import { useSelector } from 'react-redux';
import './track-carbon.css';

export default function TrackCarbon() {
  const cartFood = useSelector(state => state.cartFood);

  const carbonAmount = () => {
    const result = cartFood.data
      .map(value => value.carbon)
      .reduce((a, b) => a + b, 0);
    return result;
  };
  const navigate = useNavigate();
  return (
    <div className="track-carbon__wrapper mt-4">
      <Container>
        <button
          style={{ border: 'none', backgroundColor: 'transparent' }}
          onClick={() => navigate(-1)}
        >
          <NavBack />
        </button>
        <p className="my-5 carbon-description">
          Berikut Dampak karbon yang dihasilkan dari makanan yang kamu makan
          hari ini
        </p>
        <div className="box-carbon-calculate w-100 d-flex flex-column gap-5 justify-content-center align-items-center py-5 rounded-4">
          <ProgressBar
            now={carbonAmount()}
            variant={'success'}
            className="carbon-food-bar w-25"
          />
          <h2 className="carbon-food-text">
            {carbonAmount()}
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
        <Link to={'/trackcalori'}>
          <ButtonPrimary style="btn-track-carbon text-end mb-5">
            Track Calori
          </ButtonPrimary>
        </Link>
      </Container>
    </div>
  );
}
