/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Card from 'react-bootstrap/Card';
import ButtonPrimary from '../button/button-primary';
// import { foodCard } from './../../fakers';
import './card.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { resetCart, storeToCart } from '../../redux/cart-food/action';
import { useState } from 'react';

export default function CardFood({ img, title, calori, carbon, id, isCart }) {
  const [loading, setLoading] = useState(false);
  const dispacth = useDispatch();

  const deleteToCart = () => {
    dispacth(resetCart(id));
  };

  const addToCart = async () => {
    setLoading(() => true);
    await dispacth(
      storeToCart({
        id: id,
      })
    );
    setLoading(() => false);
  };

  return (
    <Card style={{ width: '14rem' }} className="rounded-0 border-0">
      <Card.Body className="p-0">
        <Card.Img
          variant="top"
          src={img}
          className="rounded-0"
          width={224}
          height={168}
        />
        <Card.Title className="food-title fs-6 mt-2" style={{ height: '55px' }}>
          {title}
        </Card.Title>
        <Card.Text className="mb-4 px-2 calori">Calori: {calori}Kcal</Card.Text>
        <Card.Text className="mb-4 px-2 carbon">
          Carbon: {carbon}kgCo2
        </Card.Text>
        <div className="d-flex justify-content-between pb-3 px-3">
          {loading ? (
            <ButtonPrimary style={'btn-card'}>
              <div className="spinner-border text-light" role="status">
                <span className="sr-only"></span>
              </div>
            </ButtonPrimary>
          ) : isCart(id) ? (
            <ButtonPrimary style={'btn-delete'} onClick={deleteToCart}>
              Hapus
            </ButtonPrimary>
          ) : (
            <ButtonPrimary style={'btn-card'} onClick={addToCart}>
              Pilih
            </ButtonPrimary>
          )}

          <Link to={`/food/${id}`}>
            <ButtonPrimary style={'btn-card'}>Detail</ButtonPrimary>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
}
