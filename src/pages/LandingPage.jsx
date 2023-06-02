import NavigationBar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import ContentLandingPage from '../components/Content/ContentLandingPage';
import FooterComponent from '../components/Footer/footer';

export default function LandingPage() {
  return (
    <div>
      <NavigationBar />
      <Hero />
      <div className="text-center fw-bolder fs-2">Our Features</div>
      <ContentLandingPage />
      <FooterComponent />
    </div>
  );
}
