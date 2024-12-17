import React, { useEffect } from 'react';

function Button() {
    return (
        <button className="btn" id="button">See more →</button>
    );
}

function UiuxDesign() {
    useEffect(() => {
        document.title = 'UI/UX Design - PixelCode by Din';
    }, []);

    return (
        <div className="container px-5">
            <div className="py-5">
                <h1 className="text-center pt-5">UI/UX Design</h1>
                <p className="text-center">I specialize in creating intuitive and visually engaging UI/UX designs for both web and mobile applications. My focus is on crafting user-centered solutions that enhance usability while delivering modern, clean aesthetics.</p>
            </div>

            <hr id="line" className="mb-3"></hr>

            <div className="row pt-4 pb-5">
                <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4" id="desc">
                    <h3>Web Design</h3>
                    <p>Highlighting a range of web designs crafted according to detailed client briefs. Each design is a testament to my commitment to translating client ideas into visually compelling and user-friendly websites.</p>
                    <a href="https://drive.google.com/drive/folders/1wQ_UpaKtWixyiWXsj85OaDuRe7aZusA1?usp=drive_link" target="_blank"><Button /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-1" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/ui-ux-design/Web - 1.jpg" className="d-block" style={{ maxWidth: '100%', maxHeight: '27rem', width: 'auto', height: 'auto', margin: 'auto' }} alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/ui-ux-design/Web - 2.jpg" className="d-block" style={{ maxWidth: '100%', maxHeight: '27rem', width: 'auto', height: 'auto', margin: 'auto' }} alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/ui-ux-design/Web - 3.jpg" className="d-block" style={{ maxWidth: '100%', maxHeight: '27rem', width: 'auto', height: 'auto', margin: 'auto' }} alt="Slide 3" id="slide" />
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
                    <h3>Mobile App Design</h3>
                    <p>Browse through my mobile app design projects where functionality meets style. Each design is meticulously crafted to provide a visually appealing and user-friendly experience, enhancing overall app performance.</p>
                    <a href="https://drive.google.com/drive/folders/18k6HukApHcGJ9gWvkJqY0AmTJdobNydc?usp=drive_link" target="_blank"><Button /></a>
                </div>

                <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                    <div id="carousel-2" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/image/ui-ux-design/Mobile - 1.jpg" className="d-block" style={{ maxWidth: '100%', maxHeight: '27rem', width: 'auto', height: 'auto', margin: 'auto' }} alt="Slide 1" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/ui-ux-design/Mobile - 2.jpg" className="d-block" style={{ maxWidth: '100%', maxHeight: '27rem', width: 'auto', height: 'auto', margin: 'auto' }} alt="Slide 2" id="slide" />
                            </div>

                            <div className="carousel-item">
                                <img src="/image/ui-ux-design/Mobile - 3.jpg" className="d-block" style={{ maxWidth: '100%', maxHeight: '27rem', width: 'auto', height: 'auto', margin: 'auto' }} alt="Slide 3" id="slide" />
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
        </div>
    );
}

export default UiuxDesign;
