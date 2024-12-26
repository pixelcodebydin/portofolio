import React, { useEffect, useState } from 'react';
import './css/Carousel.css';
import { Button } from '../components/Button';
import { readIllustrationActiveCategory, readIllustrationActiveFile } from '../api/Illustration';
import user from '../assets/user.jpg';
import { addComment, readCommentPage } from '../api/Comments';
import DateFormat from '../components/DateFormat';
import { SuccessAlert, FailedAlert } from '../components/Swal';
import { useNavigate } from 'react-router-dom';

function Illustration() {
    const [illustration, setIllustration] = useState([]);
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
            await addComment('Illustration', formData);
            SuccessAlert('Comment added successfully!');
            navigate('/graphic-design');
            setFormData({ nama_komentar: '', isi_komentar: '' });
        } catch (error) {
            FailedAlert('Failed to add comment. Please try again.');
        }
    };

    useEffect(() => {
        const getComment = async () => {
            try {
                const data = await readCommentPage('Illustration');
                setComment(data);
            } catch (error) {
                console.error('Failed to fetch comments:', error);
            }
        };
        getComment();
    }, []);

    useEffect(() => {
        document.title = 'Illustration - PixelCode by Din';
        const getIllustration = async () => {
            try {
                const data = await readIllustrationActiveCategory();
                setIllustration(data);

                const filesData = {};
                for (const category of data) {
                    const fileData = await readIllustrationActiveFile(category.id_illustration);
                    filesData[category.id_illustration] = fileData;
                }
                setFiles(filesData);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };
        getIllustration();
    }, []);

    return (
        <div className="container px-5">
            <div className="py-5">
                <h1 className="text-center pt-3">Illustration</h1>
                <p className="text-center">I specialize in diverse illustration styles, including vector art, minimalist avatars, microstock designs, and storyboards. My work combines creativity and precision to deliver visually compelling results that cater to various needs, from personal branding to commercial projects.</p>
            </div>

            {illustration.map((item, index) => (
                <div key={index}>
                    <hr id="line" className="mb-3" />
                    <div className="row pt-4 pb-5">
                        <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12 col-xs-12 mt-4" id="desc">
                            <h3>{item.kategori_illustration}</h3>
                            <p>{item.deskripsi_illustration}</p>
                            <a href={item.link_illustration} target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
                        </div>

                        <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-xs-12 mt-4">
                            <div id={`carousel-${index}`} className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {files[item.id_illustration] && files[item.id_illustration].length > 0 ? (
                                        files[item.id_illustration].map((file, fileIndex) => (
                                            <div className={`carousel-item ${fileIndex === 0 ? 'active' : ''}`} key={file.id_file_illustration}>
                                                <img src={`/image/illustration/${file.file_illustration}`} className="d-block" id="slide" />
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

export default Illustration;
