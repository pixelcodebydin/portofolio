import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/Button';
import { SuccessAlert, FailedAlert } from '../components/Swal';

function Login() {
    useEffect(() => {
        document.title = 'Login - PixelCode by Din';
    }, []);

    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    const navigate                = useNavigate();
    const Email                   = 'admin@admin.com';
    const Password                = 'Admin12345';
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === Email && password === Password) {
            sessionStorage.setItem('isLogin', true);
            window.dispatchEvent(new Event('storage'));
            SuccessAlert('Welcome, Admin!');
            navigate('/admin');
        } else {
            FailedAlert("You've entered an incorrect email/password.");
        }
    };
    
    return (
        <div className="d-flex justify-content-center align-items-center text-center" style={{ height: '70vh' }}>
            <form onSubmit={ handleSubmit } className="col-xl-4 col-lg-6 col-md-8 col-sm-10 col-xs-12 mx-auto">
                <h2>Admin Panel</h2>
                <input type="email" className="form-control mt-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required autoComplete="off" />
                <input type="password" className="form-control mt-2 mb-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <Button desc="Login" id="button-2" />
            </form>
        </div>
    );
};

export default Login;
