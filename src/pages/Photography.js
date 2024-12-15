import React, { useEffect } from 'react';

function Photography() {
    useEffect(() => {
        document.title = 'Photography - PixelCode by Din';
    }, []);

    return (
        <div className="container px-5">
            <h1>Photography</h1>
            <p>I am a photographer with experience in making photography and videography.</p>
        </div>
    );
}

export default Photography;
