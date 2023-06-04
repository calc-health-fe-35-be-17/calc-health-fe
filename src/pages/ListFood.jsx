/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { Container } from 'react-bootstrap';
import Search from '../components/Search/Search';
import { BsBag } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import ButtonSecond from '../components/Button/ButtonSecond/Button';
import { fetchFoods } from '../Redux/Foods/action';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import Loading from '../components/Loading/Loading';
import CardFood from '../components/Card/CardFood';

function Foods(props) {
  useEffect(() => {
    props.fetchfood();
  }, []);

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
          <div>
            <h2>Success</h2>
            {console.log(props.foodlist.data)}
          </div>
        )}
      </div>
    </Container>
  );
}

const mapStateProps = state => {
  return {
    foodlist: state.listFood,
  };
};

const mapDispatchProps = dispatch => {
  return {
    fetchfood: () => dispatch(fetchFoods()),
  };
};

export default connect(mapStateProps, mapDispatchProps)(Foods);
