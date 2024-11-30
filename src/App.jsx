import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Features from './components/Features';
import Contact from './components/Contact';
import ChatBot from './components/ChatBot';
import Footer from './components/Footer';
import Serverdown from './components/Serverdown.jsx';

function App() {
  return (
    <Router>
      <div className="bg-gray-100 min-h-screen flex flex-col justify-between">
        <Header />
        <main className="mt-20">
          <Routes>
{/*             <Route path="/" element={<Home />} /> */}
            <Route path="/about" element={<About />} />
            <Route path="/features" element={<Features />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/chatbot" element={<ChatBot />} /> {/* ChatBot route */}
            <Route path="/" element={<Serverdown />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
