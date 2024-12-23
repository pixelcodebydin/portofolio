import React from 'react';
import { useLocation } from 'react-router-dom';
import './css/Footer.css';
import logo from '../assets/Logo.png';

function Footer() {
    const location    = useLocation();
    return (
        <footer className={location.pathname === "/admin" ? "absolute-footer" : "sticky-footer mt-4"}>
            <div id="footer" className="container px-5 pt-5 pb-4">
                <img src={logo} alt="Logo" id="logo-footer" />
                <p className="mt-2">© 2024 PixelCode by Din. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
