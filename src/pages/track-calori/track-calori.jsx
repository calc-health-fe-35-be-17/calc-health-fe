
import NavBack from './component/nav-back/nav-back';
import DiagramBox from './partials/diagram-box/diagram-box';
import FoodList from './partials/food-list/food-list';
import FormGenerate from './partials/form-generate/form-generate';
import './track-calori.css';


export default function TrackCalori(){
    return (
        <div className='track-calori__wrapper'>
            <NavBack />
            <FormGenerate />
            <DiagramBox />
            <FoodList />
        </div>
    )
}