import { Col, Row } from 'react-bootstrap';
import ButtonPrimary from '../../../../components/button/button-primary/button';
import { Link } from 'react-router-dom';
import './card.css';

export default function Card({ image, name, description, id }) {
  return (
    <Col md={6} className="mb-4">
      <Row>
        <Col md={5}>
          <img
            src={`https://calc-health-be.up.railway.app/${image}`}
            width={'200px'}
            alt="produk-menu"
            height={'201px'}
          />
        </Col>
        <Col md={7} className="p-1 d-flex flex-column justify-content-center">
          <h3 className="cart-food-title">{name}</h3>
          <p
            className="cart-food-desc"
            dangerouslySetInnerHTML={{ __html: description }}
          />
          <Link to={`/food/${id}`}>
            <ButtonPrimary style={'w-fit'}>Detail</ButtonPrimary>
          </Link>
        </Col>
      </Row>
    </Col>
  );
}
