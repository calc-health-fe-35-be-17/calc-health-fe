import { Col, Row } from 'react-bootstrap';
import './diagram-box.css';
import CompositionDiagram from '../../component/composition-diagram/composition-diagram';

export default function DiagramBox(){

    const composition = [
        {
            name: 'Karbohidrat',
            count: 0,
        },
        {
            name: 'Protein',
            count: 0,
        },
        {
            name: 'Lemak',
            count: 0,
        },
        {
            name: 'Karbondioksida',
            count: 0,
        }
    ]

    return (
        <div className='diagram-box__wrapper'>
            <Row className='justify-content-between'>
                <Col md={7}>
                    <span className='required-calori_title'>Kebutuhan Kalori Harian</span>
                    <Row className='justify-content-between'>
                        <Col md={7}>
                            <div className="circle-diagram">

                            </div>
                        </Col>
                        <Col md={3}>
                            <ul className='calculate-calori'>
                                <li>
                                    Dibutuhkan <br />
                                    <span><strong>2070.99</strong> Kkal</span> 
                                </li>
                                <li>
                                    Terpenuhi <br />
                                    <span><strong>0</strong> Kkal</span> 
                                </li>
                            </ul>
                        </Col>
                    </Row>
                </Col>
                <Col md={3}>
                    {composition.map((item, index) =>  <CompositionDiagram key={index} name={item.name} count={item.count} />)}
                </Col>
            </Row>
        </div>
    )
}