import NavigationBar from '../../components/Navbar/Navbar';
import Hero from '../../components/hero/hero';
import ContentLandingPage from '../../components/content/content-landing-page';
import FooterComponent from '../../components/footer/footer';

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
