/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Container, Stack } from 'react-bootstrap';
import Search from '../../components/search/search';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ButtonSecond from '../../components/button/button-second';
import { fetchFoods } from '../../redux/foods/action';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Loading from '../../components/loading/loading';
import CardFood from '../../components/card/card-food';

function Foods(props) {
  useEffect(() => {
    if (props.foodlist.data != 0) return;
    props.fetchfood();
  }, []);

  console.log(props.foodlist.data);
  const checkIsCartFood = id => {
    const ids = props.cartFood.data.map(value => value.id);
    if (!ids.includes(id)) {
      return false;
    }

    return true;
  };

  return (
    <Container>
      <div className="header-listfood d-flex justify-content-center flex-column align-items-center my-4">
        <h4 className="fw-bold">Choise Your Food Now</h4>
        <img src="/images/choiseFood.png" alt="" width={250} />
      </div>
      <div className="search-form cart d-flex w-100 justify-content-center gap-2">
        <Search />
        <Link to={'/cartfood'}>
          <ButtonSecond style="border-0 p-1">
            <BsBag size={30} />
          </ButtonSecond>
        </Link>
      </div>
      <div>
        {props.foodlist.loading ? (
          <Loading />
        ) : props.foodlist.error ? (
          <h2>{props.foodlist.error}</h2>
        ) : (
          <Stack
            className="p-3  flex-row flex-wrap justify-content-center gap-5"
            style={{
              marginTop: '50px',
            }}
          >
            {props.foodlist.data.map((food, i) => {
              return (
                <CardFood
                  key={i}
                  title={food.name}
                  img={`https://calc-health-be.up.railway.app/${food.picture}`}
                  id={food.id}
                  calori={food.calorie}
                  carbon={food.carbon}
                  status={food.status}
                  isCart={checkIsCartFood}
                />
              );
            })}
          </Stack>
        )}
      </div>
    </Container>
  );
}

const mapStateProps = state => {
  return {
    foodlist: state.listFood,
    cartFood: state.cartFood,
  };
};

const mapDispatchProps = dispatch => {
  return {
    fetchfood: () => dispatch(fetchFoods()),
  };
};

export default connect(mapStateProps, mapDispatchProps)(Foods);
