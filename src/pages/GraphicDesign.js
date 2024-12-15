import React, { useEffect } from 'react';

function GraphicDesign() {
    useEffect(() => {
        document.title = 'Graphic Design - PixelCode by Din';
    }, []);

    return (
        <div className="container px-5">
            <h1>Graphic Design</h1>
            <p>I am a graphic designer with experience in logo design, social media design, and the others.</p>
            <ul>
                <li>Project 1: Logo Design for Poirot Law Firm</li>
                <li>Project 2: Designing MAN 2 Model Medan Instagram account</li>
                <li>Project 3: Logo Design for Your Event Venue</li>
            </ul>
        </div>
    );
}

export default GraphicDesign;
