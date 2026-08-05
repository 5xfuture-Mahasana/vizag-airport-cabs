import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import ArakuPage from './pages/ArakuPage';
import RajahmundryPage from './pages/RajahmundryPage';
import VijayawadaPage from './pages/VijayawadaPage';
import HyderabadPage from './pages/HyderabadPage';
import KakinadaPage from './pages/KakinadaPage';
import SrikakulamPage from './pages/SrikakulamPage';
import TuniPage from './pages/TuniPage';
import AmalapuramPage from './pages/AmalapuramPage';
import AnnavaramPage from './pages/AnnavaramPage';
import NarsipatnamPage from './pages/NarsipatnamPage';
import VizianagaramPage from './pages/VizianagaramPage';
import BobbiliPage from './pages/BobbiliPage';
import PalasaPage from './pages/PalasaPage';
import BhadrachalamPage from './pages/BhadrachalamPage';
import JagdalpurPage from './pages/JagdalpurPage';
import CabsInVizag from './pages/CabsInVizag';
import TaxiServiceInVizag from './pages/TaxiServiceInVizag';
import TaxiServiceInVisakhapatnam from './pages/TaxiServiceInVisakhapatnam';
import AirportCabsVizag from './pages/AirportCabsVizag';
import BhogapuramAirportCabs from './pages/BhogapuramAirportCabs';
import BhogapuramAirportToVizagCabs from './pages/BhogapuramAirportToVizagCabs';
import BhogapuramAirportToVizianagaramCabs from './pages/BhogapuramAirportToVizianagaramCabs';
import BhogapuramAirportToSrikakulamCabs from './pages/BhogapuramAirportToSrikakulamCabs';
import BhogapuramAirportToArakuValleyCabs from './pages/BhogapuramAirportToArakuValleyCabs';
import BhogapuramAirportPickup from './pages/BhogapuramAirportPickup';
import OutstationTaxiVizag from './pages/OutstationTaxiVizag';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import RoutesPage from './pages/Routes';
import TourPackages from './pages/TourPackages';
import VizagSightseeingTour from './pages/VizagSightseeingTour';
import VizagToArakuValleyTour from './pages/VizagToArakuValleyTour';
import VizagToLambasingiTour from './pages/VizagToLambasingiTour';
import VizagToVanjangiTour from './pages/VizagToVanjangiTour';
import FloatingButtons from './components/FloatingButtons';
import MobileActionBar from './components/MobileActionBar';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/vizag-to-araku-valley-cabs" element={<ArakuPage />} />
        <Route path="/vizag-to-rajahmundry-cabs" element={<RajahmundryPage />} />
        <Route path="/vizag-to-vijayawada-cabs" element={<VijayawadaPage />} />
        <Route path="/vizag-to-hyderabad-cabs" element={<HyderabadPage />} />
        <Route path="/vizag-to-kakinada-cabs" element={<KakinadaPage />} />
        <Route path="/vizag-to-srikakulam-cabs" element={<SrikakulamPage />} />
        <Route path="/vizag-to-tuni-cabs" element={<TuniPage />} />
        <Route path="/vizag-to-amalapuram-cabs" element={<AmalapuramPage />} />
        <Route path="/vizag-to-annavaram-cabs" element={<AnnavaramPage />} />
        <Route path="/vizag-to-narsipatnam-cabs" element={<NarsipatnamPage />} />
        <Route path="/vizag-to-vizianagaram-cabs" element={<VizianagaramPage />} />
        <Route path="/vizag-to-bobbili-cabs" element={<BobbiliPage />} />
        <Route path="/vizag-to-palasa-cabs" element={<PalasaPage />} />
        <Route path="/vizag-to-bhadrachalam-cabs" element={<BhadrachalamPage />} />
        <Route path="/vizag-to-jagdalpur-cabs" element={<JagdalpurPage />} />
        <Route path="/cabs-in-vizag" element={<CabsInVizag />} />
        <Route path="/taxi-service-in-vizag" element={<TaxiServiceInVizag />} />
        <Route path="/taxi-service-in-visakhapatnam" element={<TaxiServiceInVisakhapatnam />} />
        <Route path="/airport-cabs-vizag" element={<AirportCabsVizag />} />
        <Route path="/bhogapuram-airport-cabs" element={<BhogapuramAirportCabs />} />
        <Route path="/bhogapuram-airport-to-vizag-cabs" element={<BhogapuramAirportToVizagCabs />} />
        <Route path="/bhogapuram-airport-to-vizianagaram-cabs" element={<BhogapuramAirportToVizianagaramCabs />} />
        <Route path="/bhogapuram-airport-to-srikakulam-cabs" element={<BhogapuramAirportToSrikakulamCabs />} />
        <Route path="/bhogapuram-airport-to-araku-valley-cabs" element={<BhogapuramAirportToArakuValleyCabs />} />
        <Route path="/bhogapuram-airport-pickup" element={<BhogapuramAirportPickup />} />
        <Route path="/outstation-taxi-vizag" element={<OutstationTaxiVizag />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/routes" element={<RoutesPage />} />
        <Route path="/tour-packages" element={<TourPackages />} />
        <Route path="/vizag-sightseeing-tour" element={<VizagSightseeingTour />} />
        <Route path="/vizag-to-araku-valley-tour" element={<VizagToArakuValleyTour />} />
        <Route path="/vizag-to-lambasingi-tour" element={<VizagToLambasingiTour />} />
        <Route path="/vizag-to-vanjangi-tour" element={<VizagToVanjangiTour />} />
      </Routes>
      <FloatingButtons />
      <MobileActionBar />
    </Router>
  );
}
