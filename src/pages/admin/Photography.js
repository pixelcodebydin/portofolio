import React, { useEffect } from 'react';
import Menu from '../../components/Menu';

function AdminPhotography() {
    useEffect(() => {
        document.title = 'Photography - Admin Panel';
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center">Welcome to Admin Panel</h1>
            <Menu />
        </div>
    );
};

export default AdminPhotography;
