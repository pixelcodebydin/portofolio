import React, { useEffect } from 'react';
import './css/Carousel.css';
import { Button } from '../components/Button';

function GraphicDesign() {
    useEffect(() => {
        document.title = 'Graphic Design - PixelCode by Din';
    }, []);

    return (
        <div className="container px-5">
            <div className="py-5">
                <h1 className="text-center pt-3">Graphic Design</h1>
                <p className="text-center">As a skilled graphic designer, I specialize in creating impactful visuals, including logos, social media content, stationery, twibbons, and more. With a focus on aesthetics and functionality, I bring your ideas to life, delivering designs that capture attention and leave a lasting impression.</p>
            </div>

            <hr id="line" className="mb-3"></hr>

            <div className="row pt-4 pb-5">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4" id="desc">
                    <h3>Logo Design</h3>
                    <p>Explore my collection of logo designs and branding projects that capture the essence of each client’s vision. From startups to established businesses, my designs focus on creating strong, recognizable brand identities that leave a lasting impression.</p>
                    <a href="https://drive.google.com/drive/folders/1_P8w6Ak6JnUpHMC8CZMCkKyJgt4iAWRS?usp=drive_link" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-1" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/graphic-design/Logo - 1.jpg" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/graphic-design/Logo - 2.jpg" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/graphic-design/Logo - 3.jpg" className="d-block" alt="Slide 3" id="slide" />
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
                    <h3>Social Media Content</h3>
                    <p>Explore my portfolio of social media content design created for educational and community organizations like MAN 2 Model Medan, PEMA Fasilom-TI, and Rumah Izin. These posts are designed to reflect the values and missions of each organization, fostering community engagement.</p>
                    <a href="https://drive.google.com/drive/folders/1kccMlhMNmr3262uKcVyhdfDaKbsRfBho?usp=drive_link" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-2" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/graphic-design/Instagram - 1.jpg" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/graphic-design/Instagram - 2.jpg" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/graphic-design/Instagram - 3.jpg" className="d-block" alt="Slide 3" id="slide" />
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
                    <h3>Twibbon</h3>
                    <p>Explore a collection of custom twibbon designs tailored to enhance social media events. My designs combine aesthetic appeal with strong messaging to help you achieve your engagement goals.</p>
                    <a href="https://drive.google.com/drive/folders/13bML_DLxHab-rlmWmzPHepwD6hC12jc4?usp=drive_link" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-3" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/graphic-design/Twibbon - 1.jpg" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/graphic-design/Twibbon - 2.jpg" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/graphic-design/Twibbon - 3.jpg" className="d-block" alt="Slide 3" id="slide" />
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
                    <h3>YouTube Thumbnail</h3>
                    <p>Experienced in designing custom YouTube thumbnails that stand out in the crowded video landscape. Utilizing bold visuals and compelling text, my thumbnails help videos attract more viewers and convey the essence of the content effectively.</p>
                    <a href="https://drive.google.com/drive/folders/1agWYjiQy2Sb7zDvICi3mLwJFfUIUieX5?usp=drive_link" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-4" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/graphic-design/Thumbnail - 1.jpg" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/graphic-design/Thumbnail - 2.jpg" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/graphic-design/Thumbnail - 3.jpg" className="d-block" alt="Slide 3" id="slide" />
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
                    <h3>Other</h3>
                    <p>My graphic design portfolio features a wide array of projects, including stationery, banner, brochure, and the others. I combine creativity with a professional touch to produce designs that not only look great but also serve their intended purpose effectively.</p>
                    <a href="https://drive.google.com/drive/folders/1EqPDfKdJtAlsqt2fWyIYTUrLZeKlZHrO?usp=drive_link" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-5" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/graphic-design/Other - 1.jpg" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/graphic-design/Other - 2.jpg" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/graphic-design/Other - 3.jpg" className="d-block" alt="Slide 3" id="slide" />
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

export default GraphicDesign;
