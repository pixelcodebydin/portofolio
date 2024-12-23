import React, { useEffect } from 'react';
import { Button } from '../components/Button';

function Illustration() {
    useEffect(() => {
        document.title = 'Illustration - PixelCode by Din';
    }, []);

    return (
        <div className="container px-5">
            <div className="py-5">
                <h1 className="text-center pt-3">Illustration</h1>
                <p className="text-center">I specialize in diverse illustration styles, including vector art, minimalist avatars, microstock designs, and storyboards. My work combines creativity and precision to deliver visually compelling results that cater to various needs, from personal branding to commercial projects.</p>
            </div>

            <hr id="line" className="mb-3"></hr>

            <div className="row pt-4 pb-5">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4" id="desc">
                    <h3>Vector Art</h3>
                    <p>Combining artistry and technology, I create detailed vector portraits that highlight the unique features and personality of each subject. These digital artworks are versatile, scalable, and perfect for various applications, from custom illustrations to corporate projects.</p>
                    <a href="https://drive.google.com/drive/folders/1oRhpiPqMqVViGVDZ_fmivbjRv_UpWrJ5?usp=drive_link" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-1" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/illustration/Vector Art - 1.jpg" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/illustration/Vector Art - 2.jpg" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/illustration/Vector Art - 3.jpg" className="d-block" alt="Slide 3" id="slide" />
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
                    <h3>Microstock</h3>
                    <p>Access a curated portfolio of innovative microstock illustrations that bring creativity and versatility to your projects. Each piece is designed to provide visual interest and support diverse themes, making them ideal for a wide range of uses.</p>
                    <a href="https://drive.google.com/drive/folders/1_mKk-EgIt_K95cV7HIZLWoAX9EUu3ICi?usp=drive_link" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-2" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/illustration/Microstock - 1.jpg" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/illustration/Microstock - 2.jpg" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/illustration/Microstock - 3.jpg" className="d-block" alt="Slide 3" id="slide" />
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
                    <h3>Storyboard</h3>
                    <p>Specializing in the art of visual storytelling, I create detailed storyboards that transform concepts into compelling short videos. Each frame is meticulously designed to ensure a seamless flow of scenes, delivering a clear and impactful narrative.</p>
                    <a href="https://drive.google.com/drive/folders/1c_qNqTWWuferz0AK9nYoO_iS6h919p_d?usp=drive_link" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-3" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/illustration/Storyboard - 1.jpg" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/illustration/Storyboard - 2.jpg" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/illustration/Storyboard - 3.jpg" className="d-block" alt="Slide 3" id="slide" />
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
                    <h3>Coloring Book</h3>
                    <p>I design engaging and creative coloring books that inspire imagination and relaxation for all ages. From intricate patterns to themed illustrations, my work showcases a balance of artistic detail and user-friendly layouts, ensuring an enjoyable experience for coloring enthusiasts. Each page is thoughtfully crafted to spark creativity and bring vibrant ideas to life.</p>
                    <a href="https://drive.google.com/drive/folders/1wUOLbOoO8P_ppC9wJ27aFN5N5O8qPz8u?usp=drive_link" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-4" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/illustration/Coloring Book - 1.jpg" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/illustration/Coloring Book - 2.jpg" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/illustration/Coloring Book - 3.jpg" className="d-block" alt="Slide 3" id="slide" />
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
                    <p>Discover our collection of innovative design work, encompassing everything from engaging greeting cards to dynamic mascots. Our portfolio reflects a passion for crafting visually compelling and memorable designs tailored to diverse needs.</p>
                    <a href="https://drive.google.com/drive/folders/1TpiKh4_bfSJ7T5fclqpllt8OCGBRTTSd?usp=drive_link" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-5" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/illustration/Other - 1.jpg" className="d-block" alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/illustration/Other - 2.jpg" className="d-block" alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/illustration/Other - 3.jpg" className="d-block" alt="Slide 3" id="slide" />
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

export default Illustration;
