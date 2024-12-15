import React, { useEffect } from 'react';

function Illustration() {
    useEffect(() => {
        document.title = 'Illustration - PixelCode by Din';
    }, []);

    return (
        <div className="container px-5">
            <h1>Illustration</h1>
            <p>I am a illustrator with experience in using Adobe Illustrator and Figma.</p>
            <ul>
                <li>Project 1: Vector Art Illustration</li>
                <li>Project 2: Minimalist Avatar</li>
                <li>Project 3: Making Microstock</li>
                <li>Project 4: Storyboard</li>
            </ul>
        </div>
    );
}

export default Illustration;
