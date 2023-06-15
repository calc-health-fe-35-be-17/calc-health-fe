import { Col, Row } from "react-bootstrap"
import ButtonPrimary from "../../../../components/button/button-primary/button"
import './card.css'

export default function Card({ image, name, description }){
    return (
        <Col md={6} className="mb-4">
            <Row>
                <Col md={5}>
                    <img src={image} width={'100%'} alt="produk-menu" height={'100%'}  />
                </Col>
                <Col md={7} className="p-1 d-flex flex-column justify-content-center">
                    <h3>{ name }</h3>
                    <p className="cart-food-desc">{ description }</p>
                    <ButtonPrimary style={'w-fit'}>
                        Detail
                    </ButtonPrimary>
                </Col>
            </Row>
        </Col>
    )
}