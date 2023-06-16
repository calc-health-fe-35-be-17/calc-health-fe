import { Link } from "react-router-dom"
import "./button-choose.css"

export default function ButtonChoose(){

    return (
        <Link className="btn-choose" to={'/makanan'}>
            Pilih Makanan
        </Link>
    )
}