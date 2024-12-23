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
import Admin from './pages/admin/Home';
import AdminComments from './pages/admin/Comments';
import AdminGraphicDesign from './pages/admin/graphic-design/Data';
import AddGraphicDesign from './pages/admin/graphic-design/Add';
import DetailGraphicDesign from './pages/admin/graphic-design/Detail';
import UpdateGraphicDesign from './pages/admin/graphic-design/Update';
import AdminIllustration from './pages/admin/illustration/Data';
import AddIllustration from './pages/admin/illustration/Add';
import DetailIllustration from './pages/admin/illustration/Detail';
import UpdateIllustration from './pages/admin/illustration/Update';
import AdminUiuxDesign from './pages/admin/ui-ux-design/Data';
import AddUiuxDesign from './pages/admin/ui-ux-design/Add';
import DetailUiuxDesign from './pages/admin/ui-ux-design/Detail';
import UpdateUiuxDesign from './pages/admin/ui-ux-design/Update';
import AdminPhotography from './pages/admin/Photography';
import AdminWebDevelopment from './pages/admin/web-development/Data';
import AddWebDevelopment from './pages/admin/web-development/Add';
import DetailWebDevelopment from './pages/admin/web-development/Detail';
import UpdateWebDevelopment from './pages/admin/web-development/Update';

function App() {
    const isLogin = sessionStorage.getItem('isLogin');
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
                <Route path="/login" element={!isLogin ? <Login /> : <Navigate to="/admin" />}  />
                <Route path="/admin" element={isLogin ? <Admin /> : <Navigate to="/" />}  />
                <Route path="/admin/comments" element={isLogin ? <AdminComments /> : <Navigate to="/" />}  />
                <Route path="/admin/graphic-design" element={isLogin ? <AdminGraphicDesign /> : <Navigate to="/" />}  />
                <Route path="/admin/graphic-design/add" element={isLogin ? <AddGraphicDesign /> : <Navigate to="/" />}  />
                <Route path="/admin/graphic-design/detail/:id" element={isLogin ? <DetailGraphicDesign /> : <Navigate to="/" />}  />
                <Route path="/admin/graphic-design/update/:id" element={isLogin ? <UpdateGraphicDesign /> : <Navigate to="/" />}  />
                <Route path="/admin/illustration" element={isLogin ? <AdminIllustration /> : <Navigate to="/" />}  />
                <Route path="/admin/illustration/add" element={isLogin ? <AddIllustration /> : <Navigate to="/" />}  />
                <Route path="/admin/illustration/detail/:id" element={isLogin ? <DetailIllustration /> : <Navigate to="/" />}  />
                <Route path="/admin/illustration/update/:id" element={isLogin ? <UpdateIllustration /> : <Navigate to="/" />}  />
                <Route path="/admin/ui-ux-design" element={isLogin ? <AdminUiuxDesign /> : <Navigate to="/" />}  />
                <Route path="/admin/ui-ux-design/add" element={isLogin ? <AddUiuxDesign /> : <Navigate to="/" />}  />
                <Route path="/admin/ui-ux-design/detail/:id" element={isLogin ? <DetailUiuxDesign /> : <Navigate to="/" />}  />
                <Route path="/admin/ui-ux-design/update/:id" element={isLogin ? <UpdateUiuxDesign /> : <Navigate to="/" />}  />
                <Route path="/admin/photography" element={isLogin ? <AdminPhotography /> : <Navigate to="/" />}  />
                <Route path="/admin/web-development" element={isLogin ? <AdminWebDevelopment /> : <Navigate to="/" />}  />
                <Route path="/admin/web-development/add" element={isLogin ? <AddWebDevelopment /> : <Navigate to="/" />}  />
                <Route path="/admin/web-development/detail/:id" element={isLogin ? <DetailWebDevelopment /> : <Navigate to="/" />}  />
                <Route path="/admin/web-development/update/:id" element={isLogin ? <UpdateWebDevelopment /> : <Navigate to="/" />}  />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
