import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/layout';
import LandingPage from './pages/landing-page/landing-page';
import Foods from './pages/foods/foods';
import TrackDiet from './pages/track-diet/track-diet';
import Login from './pages/login';
import Register from './pages/register';
import TrackCalori from './pages/track-calori';
import TrackCarbon from './pages/track-carbon';
import DetailFood from './pages/detail-food/detail-food';
import PlanMeal from './pages/plan-meal/plan-meal';
import CartFood from './pages/cart-food/cart-food';
import Protected from './middleware/protected';
import { useDispatch, useSelector } from 'react-redux';
import NotLogin from './middleware/not-login';
import { useEffect } from 'react';
import { checkLogin } from './redux/login/loginAction';
import { fetchCart } from './redux/cart-food/action';

function App() {
  const loginReducer = useSelector(state => state.loginReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(checkLogin());
    dispatch(fetchCart());
  }, []);

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/makanan"
          element={
            <NotLogin isLogin={loginReducer.user}>
              <Foods />
            </NotLogin>
          }
        />
        <Route
          path="/food/:id"
          element={
            <NotLogin isLogin={loginReducer.user}>
              <DetailFood />
            </NotLogin>
          }
        />
        <Route
          path="/trackdiet"
          element={
            <NotLogin isLogin={loginReducer.user}>
              <TrackDiet />
            </NotLogin>
          }
        />
        <Route
          path="/trackcalori"
          element={
            <NotLogin isLogin={loginReducer.user}>
              <TrackCalori />
            </NotLogin>
          }
        />
        <Route
          path="/trackcarbon"
          element={
            <NotLogin isLogin={loginReducer.user}>
              <TrackCarbon />
            </NotLogin>
          }
        />
        <Route
          path="/login"
          element={
            <Protected isLogin={loginReducer.user}>
              <Login />
            </Protected>
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/planmeal" element={<PlanMeal />} />
        <Route path="/cartfood" element={<CartFood />} />
      </Routes>
    </Layout>
  );
}

export default App;
