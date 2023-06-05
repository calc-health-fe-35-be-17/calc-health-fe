/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import Card from 'react-bootstrap/Card';
import ButtonPrimary from '../button/button-primary';
// import { foodCard } from './../../fakers';
import './Card.css';
export default function CardFood(props) {
  const { img, title, calori, carbon } = props;
  return (
    <Card style={{ width: '14rem' }} className='rounded-0 border-0'>
      <Card.Body className='p-0'>
        <Card.Img variant="top" src={img}  className='rounded-0'/>
        <Card.Title className="food-title fs-6 mt-2" style={{height: '55px'}}>{title}</Card.Title>
        <Card.Text className='mb-0 px-2'>
          <p className="calori">Calori: {calori}Kkal</p>
          <p className="carbon">Carbon: {carbon}KgCO2</p>
        </Card.Text>
        <div className="d-flex justify-content-between pb-3 px-3">
          <ButtonPrimary style={'btn-card'}>Pilih</ButtonPrimary>
          <ButtonPrimary style={'btn-card'}>Detail</ButtonPrimary>
        </div>
      </Card.Body>
    </Card>
  );
}
