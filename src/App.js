import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GraphicDesign from './pages/GraphicDesign';
import UiuxDesign from './pages/UiuxDesign';
import Illustration from './pages/Illustration';
import Photography from './pages/Photography';
import WebDevelopment from './pages/WebDevelopment';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/graphic-design" element={<GraphicDesign />} />
                <Route path="/ui-ux-design" element={<UiuxDesign />} />
                <Route path="/illustration" element={<Illustration />} />
                <Route path="/photography" element={<Photography />} />
                <Route path="/web-development" element={<WebDevelopment />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
