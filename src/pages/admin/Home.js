import React, { useEffect } from 'react';
import Menu from '../../components/Menu';

function Admin() {
    useEffect(() => {
        document.title = 'Home - Admin Panel';
    }, []);

    return (
        <div className="container py-5 mx-auto">
            <h1 className="text-center">Admin Panel</h1>
            <Menu />
        </div>
    );
}

export default Admin;