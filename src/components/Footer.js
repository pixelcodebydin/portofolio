import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './css/Footer.css';
import logo from '../assets/Logo.png';

function Footer() {
    const location = useLocation();
    const [isShortPage, setIsShortPage] = useState(false);

    useEffect(() => {
        const checkPageHeight = () => {
            if (location.pathname === '/admin') {
                const contentHeight = document.documentElement.scrollHeight;
                const viewportHeight = window.innerHeight;

                console.log('Content Height:', contentHeight);
                console.log('Viewport Height:', viewportHeight);
                setIsShortPage(contentHeight <= viewportHeight);
            }
        };

        checkPageHeight();
        window.addEventListener("resize", checkPageHeight);
        return () => {
            window.removeEventListener("resize", checkPageHeight);
        };
    }, [location.pathname])
    
    const footerClass = location.pathname === "/admin"
        ? isShortPage
            ? "absolute-footer"
            : "sticky-footer mt-4"
        : "sticky-footer mt-4";

    return (
        <footer className={footerClass}>
            <div id="footer" className="container px-5 pt-5 pb-4">
                <img src={logo} alt="Logo" id="logo-footer" />
                <p className="mt-2">© 2024 PixelCode by Din. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
