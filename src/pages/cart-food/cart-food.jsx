import ButtonChoose from "./component/button-choos/button-choose";
import './cart-food.css'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "./component/card/card";
import { Row } from "react-bootstrap";

// import { connect } from "react-redux";

const  CartFood = () => {
    const cartFoods = useSelector(state => state.cartFood)

    useEffect(() => {
        console.log(cartFoods)
    })


    return (
        <div className="container cart-food my-5">
            <ButtonChoose />
            <Row className="mt-5 justify-content-between">
                { cartFoods.data.map((item, index) => <Card key={index} name={item.name} image={item.image} description={item.description} />) }
            </Row>
        </div>
    )
}

export default CartFood;