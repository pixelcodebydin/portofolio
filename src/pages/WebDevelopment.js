import React, { useEffect } from 'react';

function WebDevelopment() {
    useEffect(() => {
        document.title = 'Web Development - PixelCode by Din';
    }, []);

    return (
        <div className="container px-5">
            <h1>Web Developer</h1>
            <p>I am a web developer with experience in React and modern web technologies.</p>
            <ul>
                <li>Project 1: Paham Hukum</li>
                <li>Project 2: Almanak HKBP</li>
                <li>Project 3: Dashboard of PED division (PT. Telkom Indonesia TBH)</li>
            </ul>
        </div>
    );
}

export default WebDevelopment;
