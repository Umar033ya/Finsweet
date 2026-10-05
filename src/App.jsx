import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import Blog from './pages/Blog';
import FAQ from './pages/FAQ';
import ContactUs from './pages/ContactUs';
import Work from './pages/Work';
import ReadCaseStudies from './pages/ReadCaseStudies';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="features" element={<Features />} />
        <Route path="work" element={<Work />} />
        <Route path="case-studies" element={<ReadCaseStudies />} />
        <Route path="blog" element={<Blog />} />
        <Route path="faq" element={<FAQ />} />
        <Route path="contact" element={<ContactUs />} />
      </Route>
    </Routes>
  );
}

export default App;
