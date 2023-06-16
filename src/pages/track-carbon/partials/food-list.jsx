import { Link } from 'react-router-dom';
import ButtonPrimary from '../../../components/button/button-primary/button';
import EmptyFoodImage from './../../../assets/empty-food-list.png';
import './food-list.css';

const EmptyFoodList = ({ parent }) => {
  const Wrapper = parent;
  return (
    <Wrapper>
      <h3 className="text-center">Anda Belum memilih makanan</h3>
      <img src={EmptyFoodImage} alt="empty-food" />
      <Link to={'/makanan'}>
        <ButtonPrimary style="mt-3 btn-choose-food">
          {/* <span className='btn-choose-food'> */}
          Pilih Makanan
          {/* </span> */}
        </ButtonPrimary>
      </Link>
    </Wrapper>
  );
};

// TODO: component render when foodList is not empty
const FoodListContent = () => {
  return <div className="food-list__wrapper my-5"></div>;
};

// wrapper untuk margin
const Wrapper = ({ children }) => {
  return (
    <div className="food-list my-5">
      <div className="food-list__wrapper-empty">{children}</div>
      <div className="food-list_button-track">
        <Link to={'/trackcalori'}>
          <ButtonPrimary style="btn-track-carbon">Track Calori</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

function FoodList() {
  const foodList = [];

  if (foodList.length == 0) {
    return <EmptyFoodList parent={Wrapper} />;
  }

  return <FoodListContent parent={Wrapper} />;
}

export default FoodList;
