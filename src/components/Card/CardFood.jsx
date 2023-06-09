/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Card from 'react-bootstrap/Card';
import ButtonPrimary from '../Button/ButtonPrimary/Button';
// import { foodCard } from './../../fakers';
import './Card.css';
export default function CardFood(props) {
  const { img, title, calori, carbon } = props;
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Img variant="top" src={img} />
        <Card.Title className="food-title">{title}</Card.Title>
        <Card.Text className="calori">{calori} Kkal</Card.Text>
        <Card.Text className="carbon">{carbon} KgCO2</Card.Text>
        <div className="d-flex justify-content-between">
          <ButtonPrimary style={'btn-'}>Pilih</ButtonPrimary>
          <ButtonPrimary style={'btn-'}>Detail</ButtonPrimary>
        </div>
      </Card.Body>
    </Card>
  );
}
