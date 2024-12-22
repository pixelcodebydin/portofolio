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
import AdminIllustration from './pages/admin/Illustration';
import AddIllustration from './pages/admin/illustration/Add';
import DetailIllustration from './pages/admin/illustration/Detail';
import UpdateIllustration from './pages/admin/illustration/Update';

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
                <Route path="/login" element={!isLogin ? <Login /> : <Navigate to="/admin/comments" />}  />
                <Route path="/admin/comments" element={isLogin ? <AdminComments /> : <Navigate to="/" />}  />
                <Route path="/admin/illustration" element={isLogin ? <AdminIllustration /> : <Navigate to="/" />}  />
                <Route path="/admin/illustration/add" element={isLogin ? <AddIllustration /> : <Navigate to="/" />}  />
                <Route path="/admin/illustration/detail/:id" element={isLogin ? <DetailIllustration /> : <Navigate to="/" />}  />
                <Route path="/admin/illustration/update/:id" element={isLogin ? <UpdateIllustration /> : <Navigate to="/" />}  />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
