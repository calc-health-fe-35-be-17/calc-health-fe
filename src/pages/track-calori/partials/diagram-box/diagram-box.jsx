import { Col, Row } from 'react-bootstrap';
import './diagram-box.css';
// import CompositionDiagram from '../../component/composition-diagram/composition-diagram';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function DiagramBox({ caloriesNeed, caloriesAmount }) {
  // const composition = [
  //     {
  //         name: 'Karbohidrat',
  //         count: 0,
  //     },
  //     {
  //         name: 'Protein',
  //         count: 0,
  //     },
  //     {
  //         name: 'Lemak',
  //         count: 0,
  //     },
  //     {
  //         name: 'Karbondioksida',
  //         count: 0,
  //     }
  // ]

  return (
    <div className="diagram-box__wrapper">
      <Row className="justify-content-between">
        <Col md={12}>
          <span className="required-calori_title">Kebutuhan Kalori Harian</span>
          <Row className="justify-content-between">
            <Col md={7}>
              <div className="circle-diagram">
                <CircularProgressbar
                  minValue={0}
                  maxValue={caloriesNeed}
                  value={caloriesAmount()}
                  text={`${caloriesAmount()}`}
                  styles={buildStyles({
                    pathColor: `rgba(17, 153, 158)`,
                    textColor: '#f88',
                    trailColor: `rgba(19, 194, 194, ${caloriesNeed})`,
                  })}
                />
              </div>
            </Col>
            <Col md={3}>
              <ul className="calculate-calori">
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <div className="dibutuhkan"></div>
                    Dibutuhkan <br />
                  </div>
                  <span>
                    <strong>{caloriesNeed}</strong> Kkal
                  </span>
                </li>
                <li>
                  <div className="d-flex align-items-center gap-3">
                    <div className="terpenuhi"></div>
                    Terpenuhi <br />
                  </div>
                  <span>
                    <strong>{caloriesAmount()}</strong> Kkal
                  </span>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
        {/* <Col md={3}>
                    {composition.map((item, index) => <CompositionDiagram key={index} name={item.name} count={item.count} />)}
                </Col> */}
      </Row>
    </div>
  );
}
