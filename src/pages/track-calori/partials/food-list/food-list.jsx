import ButtonPrimary from '../../../../components/button/button-primary'
import EmptyFoodImage from '../../../../assets/empty-food-list.png';
import './food-list.css';
import { useSelector } from 'react-redux';

const EmptyFoodList = ({ parent }) => {
    const Wrapper = parent;
    return (
        <Wrapper>
            <h3 className="text-center">Anda Belum memilih makanan</h3>
            <img src={EmptyFoodImage} alt="empty-food" />
            <ButtonPrimary style='mt-3 btn-choose-food'>
                {/* <span className='btn-choose-food'> */}
                Pilih Makanan
                {/* </span> */}
            </ButtonPrimary>
        </Wrapper>
    )
}

// TODO: component render when foodList is not empty
const FoodListContent = ({ cartFood }) => {

    return (
        <div className="food-list__wrapper my-5">
            <div className="food-list_slide">
                {cartFood.data.map((value, index) => (
                    <div className="food-content_wrapper" key={index}>
                        <img src={value.image} alt="" />
                        <h1>{value.title}</h1>
                        <p dangerouslySetInnerHTML={{ __html: value.summary }} />
                    </div>
                ))}

            </div>
        </div>
    );
}

// wrapper untuk margin
const Wrapper = ({ children }) => {
    return (
        <div className="food-list my-5">
            <div className="food-list__wrapper-empty">
                {children}
            </div>
            <div className='food-list_button-track'>
                <ButtonPrimary style="btn-track-carbon">
                    Track Cardbon
                </ButtonPrimary>
            </div>
        </div>
    )
}

function FoodList() {
    const foodList = useSelector(state => state.cartFood);;

    if (foodList.data.length == 0) {
        return <EmptyFoodList parent={Wrapper} />;
    }

    return (
        <FoodListContent parent={Wrapper} cartFood={foodList} />
    )
}

export default FoodList;