import React, { useEffect } from 'react';

function Button() {
    return (
        <button className="btn" id="button">See more →</button>
    );
}

function WebDevelopment() {
    useEffect(() => {
        document.title = 'Web Development - PixelCode by Din';
    }, []);

    return (
        <div className="container px-5">
            <div className="text-center py-5">
                <h1 className="text-center pt-5">Web Development</h1>
                <p className="text-center">I specialize in web development using PHP, MySQL, and CodeIgniter, crafting scalable and efficient web solutions. My expertise ensures seamless back-end functionality and user-friendly interfaces for any project.</p>
                <a href="https://github.com/pixelcodebydin/" target="_blank"><Button /></a>
            </div>

            <hr id="line" className="mb-2"></hr>

            <div className="row pt-4 pb-5">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4" id="desc">
                    <h3>Paham Hukum</h3>
                    <p>Building and designing the personal website of Paham Hukum using PHP, MySQL, and CodeIgniter 3, that expected to provide more knowledge to the public and can become a media of communication between people who need legal consultation and legal experts.</p>
                    <a href="https://pahamhukum.id/" target="_blank"><Button /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-1" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/web-development/Web - 1.jpg" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/web-development/Web - 2.jpg" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/web-development/Web - 3.jpg" className="d-block" alt="Slide 3" id="slide" />
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-1" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-1" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WebDevelopment;
