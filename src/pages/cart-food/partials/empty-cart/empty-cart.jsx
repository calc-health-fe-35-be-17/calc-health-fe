import { Link } from 'react-router-dom';
import EmptyFoodImage from '../../../../assets/empty-food-list.png';

export default function EmptyCart() {
  return (
    <div className="col-md-6 text-center mt-5">
      <img src={EmptyFoodImage} alt="empty-food" />
      <h3 className="mb-5">Silahkan masukan dalam keranjang terlebih dahulu</h3>
      <Link to={'/makanan'} className='btn btn-blue'>
        Pilih Makanan
      </Link>
    </div>
  )
}