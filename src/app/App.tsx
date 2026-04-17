import { Header } from './components/Header';
import { HeroBanner } from './components/HeroBanner';
import { CoreFeatures } from './components/CoreFeatures';
import { FeatureHighlights } from './components/FeatureHighlights';
import { Partners } from './components/Partners';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="w-full min-h-screen bg-white">
      <Header />
      <HeroBanner />
      <CoreFeatures />
      <FeatureHighlights />
      <Partners />
      <Footer />
    </div>
  );
}