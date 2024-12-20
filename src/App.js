import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GraphicDesign from './pages/GraphicDesign';
import UiuxDesign from './pages/UiuxDesign';
import Illustration from './pages/Illustration';
import Photography from './pages/Photography';
import WebDevelopment from './pages/WebDevelopment';
import Login from './pages/Login';
import AdminComments from './pages/admin/Comments';
import AdminGraphicDesign from './pages/admin/GraphicDesign';
import AdminUiuxDesign from './pages/admin/UiuxDesign';
import AdminIllustration from './pages/admin/Illustration';
import AdminPhotography from './pages/admin/Photography';
import AdminWebDevelopment from './pages/admin/WebDevelopment';

function App() {
    const isLogin = localStorage.getItem('isLogin');

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
                <Route path="/login" element={<Login />} />
                <Route path="/admin/comments" element={isLogin ? <AdminComments /> : <Navigate to="/" />}  />
                <Route path="/admin/graphic-design" element={isLogin ? <AdminGraphicDesign /> : <Navigate to="/" />}  />
                <Route path="/admin/ui-ux-design" element={isLogin ? <AdminUiuxDesign /> : <Navigate to="/" />}  />
                <Route path="/admin/illustration" element={isLogin ? <AdminIllustration /> : <Navigate to="/" />}  />
                <Route path="/admin/photography" element={isLogin ? <AdminPhotography /> : <Navigate to="/" />}  />
                <Route path="/admin/web-development" element={isLogin ? <AdminWebDevelopment /> : <Navigate to="/" />}  />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
