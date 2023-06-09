import { useEffect, useState } from 'react';
import NavBack from './component/nav-back/nav-back';
import DiagramBox from './partials/diagram-box/diagram-box';
import FoodList from './partials/food-list/food-list';
import FormGenerate from './partials/form-generate/form-generate';
import './track-calori.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ButtonPrimary from '../../components/button/button-primary/button';

export default function TrackCalori() {
  const [caloriesNeed, setCaloriesNeed] = useState(0);
  const cartFood = useSelector(state => state.cartFood);

  const caloriesAmount = () => {
    const result = cartFood.data
      .map(value => value.calorie)
      .reduce((a, b) => a + b, 0);
    return result;
  };

  useEffect(() => {
    if (localStorage.getItem('bmr')) {
      setCaloriesNeed(() => Number(localStorage.getItem('bmr')));
    }
  }, [caloriesNeed]);

  const trackBMR = (gender, weight, height, age) => {
    if (gender == 'Pria') {
      return 665 + 13.7 * weight + 5 * height - 6.8 * age;
    }
    return 655 + 9.6 * weight + 1.8 * height - 4.7 * age;
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { age, height, weight, gender } = e.target;
    const bmr = trackBMR(gender.value, weight.value, height.value, age.value);
    localStorage.setItem('bmr', bmr);
    setCaloriesNeed(() => bmr.toFixed(2));
  };

  const navigate = useNavigate();

  return (
    <div className="track-calori__wrapper mt-4">
      <button
        style={{ border: 'none', backgroundColor: 'transparent' }}
        onClick={() => navigate(-1)}
      >
        <NavBack />
      </button>
      <FormGenerate handleSubmit={handleSubmit} caloriesNeed={caloriesNeed} />
      <DiagramBox caloriesNeed={caloriesNeed} caloriesAmount={caloriesAmount} />
      <FoodList />
      <Link to={'/trackcarbon'}>
        <ButtonPrimary style="btn-track-carbon text-end mb-5">
          Track Carbon
        </ButtonPrimary>
      </Link>
    </div>
  );
}
