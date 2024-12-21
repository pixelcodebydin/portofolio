import React, { useEffect } from 'react';
import Button from '../components/Button';

function Photography() {
    useEffect(() => {
        document.title = 'Photography - PixelCode by Din';
    }, []);

    return (
        <div className="container px-5">
            <div className=" text-center py-5">
                <h1 className="text-center pt-3">Photography</h1>
                <p className="text-center">I focus on capturing meaningful moments that leave a lasting impression. From event documentation to creative photography, I ensure each shot reflects a perfect blend of storytelling and artistic vision.</p>
                <a href="https://drive.google.com/drive/folders/1tYo-SqdJLj4Y2oAyNVVaCRDYB56dW8uA?usp=drive_link" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
            </div>

            <hr id="line" className="mb-3"></hr>

            <div className="row pt-4 pb-5">
                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <img src="/image/photography/Photo - 1.jpg" className="d-block" id="photo" />
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <img src="/image/photography/Photo - 2.jpg" className="d-block" id="photo" />
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <img src="/image/photography/Photo - 3.jpg" className="d-block" id="photo" />
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <img src="/image/photography/Photo - 4.jpg" className="d-block" id="photo" />
                </div>

                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <img src="/image/photography/Photo - 5.jpg" className="d-block" id="photo" />
                </div>

                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <img src="/image/photography/Photo - 6.jpg" className="d-block" id="photo" />
                </div>

                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <img src="/image/photography/Photo - 7.jpg" className="d-block" id="photo" />
                </div>

                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <img src="/image/photography/Photo - 8.jpg" className="d-block" id="photo" />
                </div>

                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <img src="/image/photography/Photo - 9.jpg" className="d-block" id="photo" />
                </div>

                <div className="col-xl-2 col-lg-2 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <img src="/image/photography/Photo - 10.jpg" className="d-block" id="photo" />
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <img src="/image/photography/Photo - 11.jpg" className="d-block" id="photo" />
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <img src="/image/photography/Photo - 12.jpg" className="d-block" id="photo" />
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <img src="/image/photography/Photo - 13.jpg" className="d-block" id="photo" />
                </div>

                <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <img src="/image/photography/Photo - 14.jpg" className="d-block" id="photo" />
                </div>
            </div>
        </div>
    );
}

export default Photography;
