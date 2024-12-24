import React, { useEffect, useState } from 'react';
import './css/Carousel.css';
import { Button } from '../components/Button';
import { readUiuxDesignActiveCategory, readUiuxDesignActiveFile } from '../api/UiuxDesign';
import user from '../assets/user.jpg';
import { addComment, readCommentPage } from '../api/Comments';
import DateFormat from '../components/DateFormat';
import { SuccessAlert, FailedAlert } from '../components/Swal';
import { useNavigate } from 'react-router-dom';

function UiuxDesign() {
    const [uiuxDesign, setUiuxDesign] = useState([]);
    const [files, setFiles] = useState({});
    const navigate                = useNavigate();
    const [comment, setComment]   = useState([]);
    const [formData, setFormData] = useState({
        nama_komentar: '',
        isi_komentar: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            await addComment('UI UX Design', formData);
            SuccessAlert('Comment added successfully!');
            navigate('/ui-ux-design');
            setFormData({ nama_komentar: '', isi_komentar: '' });
        } catch (error) {
            FailedAlert('Failed to add comment. Please try again.');
        }
    };

    useEffect(() => {
        const getComment = async () => {
            try {
                const data = await readCommentPage('UI UX Design');
                setComment(data);
            } catch (error) {
                console.error('Failed to fetch comments:', error);
            }
        };
        getComment();
    }, []);

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

            <hr id="line"></hr>
            <h3 className="mt-5">Comments</h3>

            <form onSubmit={ handleSubmit }>
                <input type="text" className="form-control mt-3" name="nama_komentar" maxLength="100" value={formData.nama_komentar} onChange={handleChange} />
                <textarea className="form-control mt-2" name="isi_komentar" rows="4" style={{resize: 'none'}} value={formData.isi_komentar} onChange={handleChange}></textarea>
                <button type="submit" className="mt-2 btn mb-3" style={{background: '#FF8500', color: 'white'}}>Send</button>
            </form>

            {comment.length > 0 ? (
                comment.map((item, index) => (
                    <div key={item.id_komentar} className={`mt-3 ${index === comment.length - 1 ? 'mb-5' : 'mb-3'}`}>
                        <table>
                            <tr>
                                <td rowSpan="3" valign="top"><img src={user} style={{width: '2.7rem', height: '2.7rem', borderRadius: '50%', marginRight: '1rem'}}/></td>
                                <td><b>{item.nama_komentar}</b></td>
                            </tr>

                            <tr><td style={{color: '#BFBFBF',fontSize: '0.9rem'}}><DateFormat dateString={item.waktu_komentar} /></td></tr>
                            <tr><td className="text-justify text-muted mt-2">{item.isi_komentar}</td></tr>
                        </table>
                    </div>
                ))
            ) : (
                <p className="text-center my-4" style={{color: '#BFBFBF'}}>No comments found.</p>
            )}
        </div>
    );
}

export default UiuxDesign;
