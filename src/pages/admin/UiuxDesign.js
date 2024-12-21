import React, { useEffect } from 'react';
import Menu from '../../components/Menu';

function AdminUiuxDesign() {
    useEffect(() => {
        document.title = 'UI/UX Design - Admin Panel';
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center">Welcome to Admin Panel</h1>
            <Menu />
        </div>
    );
};

export default AdminUiuxDesign;
