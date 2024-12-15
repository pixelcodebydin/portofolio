import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';
import image from '../assets/image.jpg';
import freepik from '../assets/freepik.png';
import shutterstock from '../assets/shutterstock.png';

function Home() {
    useEffect(() => {
        document.title = 'Home - PixelCode by Din';
    }, []);

    return (
        <div className="container px-5">
            <div className="row py-5">
                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-3" id="about">
                    <h1>Hi, I’m Dinda Julia Putri!</h1>
                    <p>
                        With over a year in design and two years in programming, I offer a strong blend of creativity and technical skill. Proficient in design tools and programming languages, I am eager to advance my experience in both fields while upholding a commitment to responsibility and excellence.
                    </p>

                    <div className="social-links d-flex gap-3 mt-2">
                        <a href="https://dribbble.com/pixelcodebydin/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-dribbble" style={{ color: '#ea4c89' }}></i>
                        </a>

                        <a href="https://www.pinterest.com/pixelcodebydin/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-pinterest" style={{ color: '#e60023' }}></i>
                        </a>

                        <a href="https://github.com/pixelcodebydin/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-github" style={{ color: '#000' }}></i>
                        </a>

                        <a href="https://instagram.com/pixelcodebydin/" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-instagram" style={{ color: '#c13584' }}></i>
                        </a>

                        <a href="https://www.shutterstock.com/g/pixelcodebydin/" target="_blank" rel="noopener noreferrer">
                            <img src={shutterstock} alt="Shutterstock" style={{ height: '1.2rem', borderRadius: '3px', marginTop: '-4px' }} />
                        </a>

                        <a href="https://www.freepik.com/author/pixelcodebydin/" target="_blank" rel="noopener noreferrer">
                            <img src={freepik} alt="Freepik" style={{ height: '1.2rem', borderRadius: '3px', marginTop: '-4px' }} />
                        </a>
                    </div>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-xs-12 mt-3">
                    <img src={image} alt="Image" id="img"/>
                </div>
            </div>

            <h1 className="text-center pt-3">Skills & Showcase</h1>
            <div className="row py-5">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <h3>Graphic Design</h3>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <p className="mb-4">
                    I possess a strong skill set in graphic design, with experience in creating a wide range of visual content, including banners, logos, Instagram posts, and more. My expertise allows me to craft engaging and professional designs tailored to various needs, ensuring each project meets high standards of creativity and effectiveness.
                    </p>
                    <Link to={'/graphic-design'}><button className="btn" id="learn-more">Learn more →</button></Link>
                </div>
            </div>

            <hr id="line"></hr>

            <div className="row py-5">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <h3>Illustration</h3>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <p className="mb-4">
                        I specialize in illustration, with a strong background in creating vector art, mascots, and various other types of illustrations. My skills in this area enable me to produce detailed and visually appealing artwork tailored to diverse needs, from branding and character design to custom graphics. My experience ensures that each piece not only meets but exceeds expectations, blending creativity with precision to deliver impactful visual solutions.
                    </p>
                    <Link to={'/illustration'}><button className="btn" id="learn-more">Learn more →</button></Link>
                </div>
            </div>

            <hr id="line"></hr>

            <div className="row py-5">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <h3>UI/UX Design</h3>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <p className="mb-4">
                        With a strong background in UI/UX design, I have successfully completed a range of projects that showcase my expertise in both web and mobile app design. My skills include creating user-friendly interfaces, designing intuitive user experiences, and ensuring visual consistency across different platforms. My portfolio highlights a variety of completed projects that demonstrate my ability to craft engaging and effective design solutions.
                    </p>
                    <Link to={'/ui-ux-design'}><button className="btn" id="learn-more">Learn more →</button></Link>
                </div>
            </div>
            
            <hr id="line"></hr>

            <div className="row py-5">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <h3>Photography</h3>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <p className="mb-4">
                        My photography skills are honed through extensive experience with camera work, capturing memorable moments and documenting events. I am proficient in using various types of cameras to deliver high-quality images that effectively convey the essence of each occasion.
                    </p>
                    <Link to={'/photography'}><button className="btn" id="learn-more">Learn more →</button></Link>
                </div>
            </div>
            
            <hr id="line"></hr>

            <div className="row py-5">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <h3>Web Development</h3>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <p className="mb-4">
                        With a strong foundation in web development, I possess skills in various technologies including HTML, CSS, JavaScript, PHP, and CodeIgniter. My experience spans multiple successful projects, from creating modern and user-friendly websites to developing complex web applications. Each project has refined my technical expertise and problem-solving abilities, allowing me to deliver high-quality solutions tailored to client needs.
                    </p>
                    <Link to={'/web-development'}><button className="btn" id="learn-more">Learn more →</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
