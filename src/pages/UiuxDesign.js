import React, { useEffect } from 'react';

function UiuxDesign() {
    useEffect(() => {
        document.title = 'UI/UX Design - PixelCode by Din';
    }, []);

    return (
        <div className="container px-5">
            <h1>UI/UX Design</h1>
            <p>I am a UI/UX designer with experience in making UI design for mobile app or website.</p>
            <ul>
                <li>Project 1: Web Design for Credipush Studio</li>
                <li>Project 2: Web Design for Big Rig Law</li>
                <li>Project 3: Web Design for Good Bros</li>
            </ul>
        </div>
    );
}

export default UiuxDesign;
