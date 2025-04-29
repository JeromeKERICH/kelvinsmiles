// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css'; // Import your global CSS file
import Portfolio from './pages/Portfolio';
import WeddingPackage from './pages/Wedding';
import PortraitPackage from './pages/Portrait';
import CommercialPackage from './pages/Commercial';
import Contact from './pages/Contact';
import FamilyPackage from './pages/FamilyPackage';
import FashionPackage from './pages/FashionPackage';
import BabyPackage from './pages/BabyPackage';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header/>

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio/>}/>
            <Route path="/weddingpackage" element={<WeddingPackage/>}/>
            <Route path="/portraitpackage" element={<PortraitPackage/>}/>
            <Route path="/commercialpackage" element={<CommercialPackage/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="familypackage" element={<FamilyPackage/>}/>
            <Route path="fashionpackage" element={<FashionPackage/>}/>
            <Route path="babypackage" element={<BabyPackage/>}/>
            <Route path="about" element={<About/>}/>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
