import React, { useEffect, useState } from 'react';
import './css/Carousel.css';
import { Button } from '../components/Button';
import { readGraphicDesignActiveCategory, readGraphicDesignActiveFile } from '../api/GraphicDesign';

function GraphicDesign() {
    const [graphicDesign, setGraphicDesign] = useState([]);
    const [files, setFiles] = useState({});

    useEffect(() => {
        document.title = 'Graphic Design - Admin Panel';
        const getGraphicDesign = async () => {
            try {
                const data = await readGraphicDesignActiveCategory();
                setGraphicDesign(data);

                const filesData = {};
                for (const category of data) {
                    const fileData = await readGraphicDesignActiveFile(category.id_graphic_design);
                    filesData[category.id_graphic_design] = fileData;
                }
                setFiles(filesData);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };
        getGraphicDesign();
    }, []);

    return (
        <div className="container px-5">
            <div className="py-5">
                <h1 className="text-center pt-3">Graphic Design</h1>
                <p className="text-center">As a skilled graphic designer, I specialize in creating impactful visuals, including logos, social media content, stationery, twibbons, and more. With a focus on aesthetics and functionality, I bring your ideas to life, delivering designs that capture attention and leave a lasting impression.</p>
            </div>

            {graphicDesign.map((item, index) => (
                <div key={index}>
                    <hr id="line" className="mb-3" />
                    <div className="row pt-4 pb-5">
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4" id="desc">
                            <h3>{item.kategori_graphic_design}</h3>
                            <p>{item.deskripsi_graphic_design}</p>
                            <a href={item.link_graphic_design} target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                        </div>

                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                            <div id={`carousel-${index}`} className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {files[item.id_graphic_design] && files[item.id_graphic_design].length > 0 ? (
                                        files[item.id_graphic_design].map((file, fileIndex) => (
                                            <div className={`carousel-item ${fileIndex === 0 ? 'active' : ''}`} key={file.id_file_graphic_design}>
                                                <img src={`/image/graphic-design/${file.file_graphic_design}`} className="d-block" id="slide" />
                                            </div>
                                        ))
                                    ) : (
                                        <div className="carousel-item active">
                                            <p className="text-center">No images available</p>
                                        </div>
                                    )}
                                </div>

                                <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>

                                <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default GraphicDesign;
