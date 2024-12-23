import React, { useEffect, useState } from 'react';
import './css/Carousel.css';
import { Button } from '../components/Button';
import { readUiuxDesignActiveCategory, readUiuxDesignActiveFile } from '../api/UiuxDesign';

function UiuxDesign() {
    const [uiuxDesign, setUiuxDesign] = useState([]);
    const [files, setFiles] = useState({});

    useEffect(() => {
        document.title = 'UI/UX Design - Admin Panel';
        const getUiuxDesign = async () => {
            try {
                const data = await readUiuxDesignActiveCategory();
                setUiuxDesign(data);

                const filesData = {};
                for (const category of data) {
                    const fileData = await readUiuxDesignActiveFile(category.id_ui_ux_design);
                    filesData[category.id_ui_ux_design] = fileData;
                }
                setFiles(filesData);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };
        getUiuxDesign();
    }, []);

    return (
        <div className="container px-5">
            <div className="py-5">
                <h1 className="text-center pt-3">UI/UX Design</h1>
                <p className="text-center">I specialize in creating intuitive and visually engaging UI/UX designs for both web and mobile applications. My focus is on crafting user-centered solutions that enhance usability while delivering modern, clean aesthetics.</p>
            </div>

            {uiuxDesign.map((item, index) => (
                <div key={index}>
                    <hr id="line" className="mb-3" />
                    <div className="row pt-4 pb-5">
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4" id="desc">
                            <h3>{item.kategori_ui_ux_design}</h3>
                            <p>{item.deskripsi_ui_ux_design}</p>
                            <a href={item.link_ui_ux_design} target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                        </div>

                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                            <div id={`carousel-${index}`} className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {files[item.id_ui_ux_design] && files[item.id_ui_ux_design].length > 0 ? (
                                        files[item.id_ui_ux_design].map((file, fileIndex) => (
                                            <div className={`carousel-item ${fileIndex === 0 ? 'active' : ''}`} key={file.id_file_ui_ux_design}>
                                                <img src={`/image/ui-ux-design/${file.file_ui_ux_design}`} className="d-block" id="slide" />
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

export default UiuxDesign;
