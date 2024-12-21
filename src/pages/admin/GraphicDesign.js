import React, { useEffect } from 'react';
import Menu from '../../components/Menu';

function AdminGraphicDesign() {
    useEffect(() => {
        document.title = 'Graphic Design - Admin Panel';
    }, []);

    return (
        <div className="container py-5">
            <h1 className="text-center">Admin Panel</h1>
            <Menu />
        </div>
    );
};

export default AdminGraphicDesign;
