import ButtonPrimary from '../../../../components/button/button-primary';
import EmptyFoodImage from '../../../../assets/empty-food-list.png';
import './food-list.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Col, Row } from 'react-bootstrap';

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
const FoodListContent = ({ cartFood }) => {
  return (
    <div className="food-list__wrapper my-5">
      <div className="food-list_slide">
        <Row>
          {cartFood.data.map((value, index) => (
            <Col
              lg={3}
              md={6}
              sm={12}
              xs={12}
              className="food-content_wrapper"
              key={index}
            >
              <img
                src={`https://calc-health-be.up.railway.app/${value.picture}`}
                alt=""
              />
              <h1>{value.name}</h1>
              <p>{value.description}</p>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

// wrapper untuk margin
const Wrapper = ({ children }) => {
  return (
    <div className="food-list my-5">
      <div className="food-list__wrapper-empty">{children}</div>
      <div className="food-list_button-track"></div>
    </div>
  );
};

function FoodList() {
  const foodList = useSelector(state => state.cartFood);

  if (foodList.data.length == 0) {
    return <EmptyFoodList parent={Wrapper} />;
  }

  return <FoodListContent parent={Wrapper} cartFood={foodList} />;
}

export default FoodList;
