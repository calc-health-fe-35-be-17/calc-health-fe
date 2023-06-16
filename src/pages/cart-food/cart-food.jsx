import ButtonChoose from './component/button-choos/button-choose';
import './cart-food.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import Card from './component/card/card';
import { Row } from 'react-bootstrap';
import EmptyCart from './partials/empty-cart/empty-cart';
import { fetchCart } from '../../redux/cart-food/action';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../components/button/button-primary/button';

const CartFood = () => {
  const cartFoods = useSelector(state => state.cartFood);
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem('card-food')) {
      dispatch(fetchCart());
    }
  }, []);

  return (
    <div className="container cart-food my-5">
      {cartFoods.data.length != 0 && <ButtonChoose />}
      <Row
        className={`mt-5 ${
          cartFoods.data.length == 0
            ? 'justify-content-center'
            : 'justify-content-between'
        }`}
      >
        {cartFoods.data.length == 0 && <EmptyCart />}
        {cartFoods.data.map((item, index) => (
          <Card
            key={index}
            name={item.title}
            image={item.image}
            description={item.summary}
            id={item.id}
          />
        ))}
      </Row>

      <div className="d-flex gap-3">
        <Link to={'/trackcalori'}>
          <ButtonPrimary>Track Calori</ButtonPrimary>
        </Link>
        <Link to={'/trackcarbon'}>
          <ButtonPrimary>Track Carbon</ButtonPrimary>
        </Link>
      </div>
    </div>
  );
};

export default CartFood;
