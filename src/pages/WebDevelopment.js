import React, { useEffect } from 'react';

function WebDevelopment() {
    useEffect(() => {
        document.title = 'Web Development - PixelCode by Din';
    }, []);

    return (
        <div className="container px-5">
            <div className="py-5">
                <h1 className="text-center pt-5">Web Development</h1>
                <p className="text-center">
                    I specialize in web development using PHP, MySQL, and CodeIgniter, crafting scalable and efficient web solutions. My expertise ensures seamless back-end functionality and user-friendly interfaces for any project.
                </p>
            </div>


        </div>
    );
}

export default WebDevelopment;
