import ButtonChoose from "./component/button-choos/button-choose";
import './cart-food.css'
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Card from "./component/card/card";
import { Row } from "react-bootstrap";
import EmptyCart from "./partials/empty-cart/empty-cart";

// import { connect } from "react-redux";

const CartFood = () => {
    const cartFoods = useSelector(state => state.cartFood);

    useEffect(() => {
        console.log(cartFoods.data)
    })


    return (
        <div className="container cart-food my-5">
            {cartFoods.data.length != 0 && <ButtonChoose />}
            <Row className={`mt-5 ${cartFoods.data.length == 0 ? 'justify-content-center' : 'justify-content-between'}`}>
                {cartFoods.data.length == 0 && <EmptyCart />}
                {cartFoods.data.map((item, index) => <Card key={index} name={item.title} image={item.image} description={item.summary} />)}
            </Row>
        </div>
    )
}

export default CartFood;