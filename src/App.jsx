import { Route, Routes } from 'react-router-dom';
import Layout from './layouts/layout';
import LandingPage from './pages/landing-page/landing-page';
import Foods from './pages/foods/foods';
import TrackDiet from './pages/track-diet/track-diet';
import Login from './pages/login';
import Register from './pages/register';
import TrackCalori from './pages/track-calori';
import TrackCarbon from './pages/track-carbon';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/makanan" element={<Foods />} />
        <Route path="/trackdiet" element={<TrackDiet />} />
        <Route path="/trackcalori" element={<TrackCalori />} />
        <Route path="/trackcarbon" element={<TrackCarbon />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Layout>
  );
}

export default App;
