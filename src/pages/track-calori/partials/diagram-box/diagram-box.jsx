import { Col, Row } from 'react-bootstrap';
import './diagram-box.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DiagramBox({ caloriesNeed, caloriesAmount }) {
  return (
    <div className="diagram-box__wrapper">
      <Row className="justify-content-between">
        <Col md={12}>
          <span className="required-calori_title">Kebutuhan Kalori Harian</span>
          <Row className="justify-content-between">
            <Col md={7} sm={12}>
              <div className="circle-diagram my-3">
                <CircularProgressbar
                  minValue={0}
                  maxValue={caloriesNeed}
                  value={caloriesAmount()}
                  text={`${caloriesAmount().toFixed(2)}`}
                  styles={buildStyles({
                    pathColor: `rgba(17, 153, 158)`,
                    textColor: '#f88',
                    trailColor: `rgba(19, 194, 194, ${caloriesNeed})`,
                  })}
                />
              </div>
            </Col>
            <Col md={3}>
              <ul className="calculate-calori p-0">
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <div className="dibutuhkan"></div>
                    Dibutuhkan <br />
                  </div>
                  <span>
                    <strong>{caloriesNeed}</strong> Kcal
                  </span>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <div className="terpenuhi"></div>
                    Terpenuhi <br />
                  </div>
                  <span>
                    <strong>{caloriesAmount().toFixed(2)}</strong> Kcal
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
