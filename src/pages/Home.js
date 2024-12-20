import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './css/Home.css';
import image from '../assets/image.jpg';
import freepik from '../assets/freepik.png';
import shutterstock from '../assets/shutterstock.png';
import Button from '../components/Button';

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
                        With expertise in graphic design, I offer a wide range of creative services tailored to meet diverse needs. From crafting unique logo designs that reflect your brand identity to producing engaging social media visuals, I ensure every detail communicates effectively. My portfolio also includes professional stationery, custom twibbons, and versatile design solutions for various purposes. Combining artistic vision with a deep understanding of design principles, I deliver high-quality work that resonates with your audience and elevates your brand presence.
                    </p>
                    <Link to={'/graphic-design'}><Button desc="Learn more →" id="button-1" /></Link>
                </div>
            </div>

            <hr id="line"></hr>

            <div className="row py-5">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <h3>Illustration</h3>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <p className="mb-4">
                        As a versatile illustrator, I bring ideas to life through various styles, including detailed vector art, sleek minimalist avatars, and engaging storyboards. My expertise extends to creating microstock assets for commercial use and custom illustrations tailored to individual projects. With a focus on clarity, creativity, and attention to detail, I strive to craft visuals that resonate with diverse audiences and serve as powerful tools for storytelling and branding.
                    </p>
                    <Link to={'/illustration'}><Button desc="Learn more →" id="button-1" /></Link>
                </div>
            </div>

            <hr id="line"></hr>

            <div className="row py-5">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <h3>UI/UX Design</h3>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <p className="mb-4">
                        As a skilled UI/UX designer, I specialize in crafting intuitive and visually appealing designs for both mobile apps and websites. With a strong focus on user-centric principles, I ensure every design not only looks stunning but also provides seamless navigation and functionality. My expertise lies in wireframing, prototyping, and utilizing modern design tools to bring concepts to life. From creating responsive websites to enhancing app interfaces, I deliver designs that prioritize usability and elevate the overall user experience.
                    </p>
                    <Link to={'/ui-ux-design'}><Button desc="Learn more →" id="button-1" /></Link>
                </div>
            </div>

            <hr id="line"></hr>

            <div className="row py-5">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <h3>Photography</h3>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <p className="mb-4">
                        Photography is more than just taking pictures. It’s about preserving emotions, stories, and memories through the lens. With expertise in event documentation and creative compositions, I excel at capturing the essence of each moment. My work combines technical proficiency with a keen eye for detail, ensuring that every shot is visually striking and emotionally engaging.
                    </p>
                    <Link to={'/photography'}><Button desc="Learn more →" id="button-1" /></Link>
                </div>
            </div>

            <hr id="line"></hr>

            <div className="row py-5">
                <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    <h3>Web Development</h3>
                </div>

                <div className="col-xl-8 col-lg-8 col-md-12 col-sm-12 col-xs-12">
                    <p className="mb-4">
                        With extensive experience in web development, I excel at building dynamic and robust web applications using PHP, MySQL, and the CodeIgniter framework. I focus on creating efficient back-end systems, integrating databases for optimized performance, and ensuring secure and scalable solutions. My development approach prioritizes clean coding practices and user-friendly designs, delivering professional results tailored to client needs.
                    </p>
                    <Link to={'/web-development'}><Button desc="Learn more →" id="button-1" /></Link>
                </div>
            </div>
        </div>
    );
}

export default Home;
