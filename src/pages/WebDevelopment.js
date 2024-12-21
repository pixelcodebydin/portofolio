import React, { useEffect } from 'react';
import { Button, ButtonAction } from '../components/Button';

function WebDevelopment() {
    useEffect(() => {
        document.title = 'Web Development - PixelCode by Din';
    }, []);

    return (
        <div className="container px-5">
            <div className="text-center py-5">
                <h1 className="text-center pt-3">Web Development</h1>
                <p className="text-center">I specialize in web development using PHP, MySQL, and CodeIgniter, crafting scalable and efficient web solutions. My expertise ensures seamless back-end functionality and user-friendly interfaces for any project.</p>
                <a href="https://github.com/pixelcodebydin/" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
            </div>

            <hr id="line" className="mb-3"></hr>

            <div className="row pt-4 pb-5">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4" id="desc">
                    <h3>Paham Hukum</h3>
                    <p>Building and designing the personal website of Paham Hukum using PHP, MySQL, and CodeIgniter 3, that expected to provide more knowledge to the public and can become a media of communication between people who need legal consultation and legal experts.</p>
                    <a href="https://pahamhukum.id/" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-1" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/web-development/Web - 1.png" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/web-development/Web - 2.png" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/web-development/Web - 3.png" className="d-block" alt="Slide 3" id="slide" />
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

            <hr id="line" className="mb-2"></hr>

            <div className="row pt-4 pb-5">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4" id="desc">
                    <h3>CV. Tamanta Indo Ekspor</h3>
                    <p>Building and designing the personal website of CV. Tamanta Indo Ekspor using PHP, MySQL, and CodeIgniter 3, that shows information about the company and services that offered by CV. Tamanta Indo Ekspor.</p>
                    <a href="https://tamantaindoekspor.com/id/index.php" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-2" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/web-development/Web - 4.png" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/web-development/Web - 5.png" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/web-development/Web - 6.png" className="d-block" alt="Slide 3" id="slide" />
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-2" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-2" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <hr id="line" className="mb-2"></hr>

            <div className="row pt-4 pb-5">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4" id="desc">
                    <h3>Dashboard of PED Division, Telkom Regional 1</h3>
                    <p>Modifying the dashboard of PED division, Telkom Regional 1, which contains information about witel data, cb, zfm and zrmm, etc.</p>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-3" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/web-development/Web - 7.png" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/web-development/Web - 8.png" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/web-development/Web - 9.png" className="d-block" alt="Slide 3" id="slide" />
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-3" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-3" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <hr id="line" className="mb-2"></hr>

            <div className="row pt-4 pb-5">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4" id="desc">
                    <h3>Konflix</h3>
                    <p>Duplicating the Netflix webstie using PHP, MySQL, and CodeIgniter 3 to fulfill the assignment for Database Systems subject.</p>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-4" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/web-development/Web - 10.png" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/web-development/Web - 11.png" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/web-development/Web - 12.png" className="d-block" alt="Slide 3" id="slide" />
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-4" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-4" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>

            <hr id="line" className="mb-2"></hr>

            <div className="row pt-4 pb-5">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4" id="desc">
                    <h3>Almanak HKBP</h3>
                    <p>Building a dashboard to monitor HKBP services that presents information about districts, resorts, huria, and the servants. The dashboard also provides information about almanac that includes reflections.</p>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-5" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/web-development/Web - 13.png" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/web-development/Web - 14.png" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/web-development/Web - 15.png" className="d-block" alt="Slide 3" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/web-development/Web - 16.png" className="d-block" alt="Slide 4" id="slide" />
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel-5" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>

                        <button className="carousel-control-next" type="button" data-bs-target="#carousel-5" data-bs-slide="next">
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
