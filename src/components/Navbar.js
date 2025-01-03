import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/Logo.png';
import './css/Navbar.css';
import { ConfirmAlert, SuccessAlert, FailedAlert } from '../components/Swal';

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();
    const isLogin  = sessionStorage.getItem('isLogin');
    
    const handleLogout = async () => {
        const isConfirmed = await ConfirmAlert(`Do you want to logout?`);
        if (isConfirmed) {
            try {
                sessionStorage.removeItem('isLogin');
                window.dispatchEvent(new Event('storage'));
                navigate('/login', { replace: true });
                SuccessAlert(`You have been logged out successfully.`);
            } catch (error) {
                FailedAlert(`Failed to logout.`);
            }
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light container px-5 py-3">
            <img src={logo} alt="Logo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className={location.pathname === "/" ? "active" : ""}><Link to="/">Home</Link></li>
                    <li className={location.pathname === "/graphic-design" ? "active" : ""}><Link to="/graphic-design">Graphic Design</Link></li>
                    <li className={location.pathname === "/illustration" ? "active" : ""}><Link to="/illustration">Illustration</Link></li>
                    <li className={location.pathname === "/ui-ux-design" ? "active" : ""}><Link to="/ui-ux-design">UI/UX Design</Link></li>
                    <li className={location.pathname === "/photography" ? "active" : ""}><Link to="/photography">Photography</Link></li>
                    <li className={location.pathname === "/web-development" ? "active" : ""}><Link to="/web-development">Web Development</Link></li>
                    
                    {isLogin && (
                        <li className="navbar-right">
                            <Link to="/admin" className="admin-panel">Admin Panel</Link>
                            <a onClick={handleLogout} className="logout-item">Logout</a>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;