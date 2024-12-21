import React, { useEffect } from 'react';
import Menu from '../../components/Menu';

function AdminWebDevelopment() {
    useEffect(() => {
        document.title = 'Web Development - Admin Panel';
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center">Welcome to Admin Panel</h1>
            <Menu />
        </div>
    );
};

export default AdminWebDevelopment;
