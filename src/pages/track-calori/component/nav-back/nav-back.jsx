import { FaAngleLeft } from "react-icons/fa";
import './nav-back.css';


export default function NavBack(){
    return (
        <div className="d-flex">
            <div className="d-flex btn-back">
                <FaAngleLeft size={50} />
                <span>Back</span>
            </div>
        </div>
    )
}