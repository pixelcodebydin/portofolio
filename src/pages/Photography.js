import React, { useEffect } from 'react';

function Photography() {
    useEffect(() => {
        document.title = 'Photography - PixelCode by Din';
    }, []);

    return (
        <div className="container px-5">
            <div className="py-5">
                <h1 className="text-center pt-5">Photography</h1>
                <p className="text-center pb-5">
                    I specialize in capturing moments that tell a story. Whether it’s event documentation or creative photography, my skills bring every shot to life with precision and artistic flair.
                </p>
            </div>


        </div>
    );
}

export default Photography;
