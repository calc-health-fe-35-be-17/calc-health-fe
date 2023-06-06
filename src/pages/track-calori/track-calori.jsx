
import NavBack from './component/nav-back/nav-back';
import FormGenerate from './partials/form-generate/form-generate';
import './track-calori.css';


export default function TrackCalori(){
    return (
        <div className='track-calori__wrapper'>
            <NavBack />
            <FormGenerate />
        </div>
    )
}