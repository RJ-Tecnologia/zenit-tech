/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/NavBar';
import Footer from '../src/components/Footer';
import Home from './pages/Home';
import About from '../src/pages/About';
import Services from '../src/pages/Services';
import Contact from '../src/pages/Contact';
import Terms from '../src/pages/Terms';
import Privacy from './pages/privacy';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-zenit[#0b1120] text-white">
        <Navbar />
        <main className="flex-grow:1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<About />} />
            <Route path="/servicos" element={<Services />} />
            <Route path="/contato" element={<Contact />} />
            <Route path="/termos" element={<Terms />} />
            <Route path="/privacidade" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
