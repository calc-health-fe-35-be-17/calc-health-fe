
import NavBack from './component/nav-back/nav-back';
import DiagramBox from './partials/diagram-box/diagram-box';
import FoodList from './partials/food-list/food-list';
import FormGenerate from './partials/form-generate/form-generate';
import './track-calori.css';


export default function TrackCalori() {
    // BMR Pria = 66,5 + (13,7 × berat badan) + (5 × tinggi badan) – (6,8 × usia)
    // BMR Wanita = 655 + (9,6 × berat badan) + (1,8 × tinggi badan) – (4,7 × usia)
    return (
        <div className='track-calori__wrapper'>
            <NavBack />
            <FormGenerate />
            <DiagramBox />
            <FoodList />
        </div>
    )
}