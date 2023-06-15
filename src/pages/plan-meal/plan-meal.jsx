import { Container } from 'react-bootstrap';
import './plan-meal.css';
import Accordion from 'react-bootstrap/Accordion';
import { planMeal } from './data';
import { useParams } from 'react-router';
import NavBack from '../../components/nav-back/nav-back';
import { Link } from 'react-router-dom';

export default function PlanMeal() {
  const { type } = useParams();

  return (
    <Container>
      <Link to={'/trackdiet'} className="text-decoration-none">
        <NavBack />
      </Link>
      <h3 className="title-meal-plan my-3 text-center mt-5">
        Calc Health udah siapin contoh plan meal buat kamu nih untuk kategori{' '}
        {type.toLocaleUpperCase()}. Happy diet!!
      </h3>
      <Container className="my-5">
        <Accordion defaultActiveKey="0">
          {planMeal[type].map((item, index) => {
            return (
              <Accordion.Item eventKey={index} key={index}>
                <Accordion.Header>{item.day}</Accordion.Header>
                <Accordion.Body>
                  {Object.keys(item.data).map((key, i) => (
                    <Container key={i} className="food-plan">
                      <div className="section-food my-3">
                        <h6 className="title">{key} (8:00 - 8.30 AM)</h6>
                        <div className="list-food p-2">
                          <ul className="m-0">
                            {item.data[key].map((food, ind) => (
                              <li key={ind}>{food}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </Container>
                  ))}
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Container>
    </Container>
  );
}
