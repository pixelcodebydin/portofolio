import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { countMenu } from '../api/Menu';
import './css/Menu.css';

function Menu() {
    const [counts, setCounts] = useState({
        comment: 0,
        graphic_design: 0,
        illustration: 0,
        ui_ux_design: 0,
        photography: 0,
        web_development: 0,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await countMenu();
                setCounts(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const menuItems = [
        { category: 'comment', label: 'comments', icon: 'bi-chat-left-dots', link: '/admin/comments' },
        { category: 'graphic_design', label: 'graphic designs', icon: 'bi-vector-pen', link: '/admin/graphic-design' },
        { category: 'illustration', label: 'illustrations', icon: 'bi-brush', link: '/admin/illustration' },
        { category: 'ui_ux_design', label: 'UI/UX designs', icon: 'bi-window-stack', link: '/admin/ui-ux-design' },
        { category: 'photography', label: 'photos', icon: 'bi-camera', link: '/admin/photography' },
        { category: 'web_development', label: 'websites', icon: 'bi-globe2', link: '/admin/web-development' },
    ];

    return (
        <div className="row">
            {menuItems.map((item) => (
                <div key={item.category} className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6 mt-3">
                    <Link to={item.link}>
                        <div className="card px-3 pt-3 pb-2" id="card">
                            <h2 className={`bi ${item.icon}`}></h2>
                            <p id="sum">{counts[item.category]} {item.label}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

export default Menu;
