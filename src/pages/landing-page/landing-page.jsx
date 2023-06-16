import Hero from '../../components/hero/hero';
import ContentLandingPage from '../../components/content/content-landing-page';

export default function LandingPage() {
  return (
    <>
      <Hero />
      <div className="text-center fw-bolder fs-2">Our Features</div>
      <ContentLandingPage />
    </>
  );
}
