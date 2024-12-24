import React, { useEffect, useState } from 'react';
import { Button } from '../components/Button';
import { readPhotographyActive } from '../api/Photography';
import user from '../assets/user.jpg';
import { addComment, readCommentPage } from '../api/Comments';
import DateFormat from '../components/DateFormat';
import { SuccessAlert, FailedAlert } from '../components/Swal';
import { useNavigate } from 'react-router-dom';

function Photography() {
    const [photography, setPhotography] = useState([]);
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
            await addComment('Photography', formData);
            SuccessAlert('Comment added successfully!');
            navigate('/photography');
            setFormData({ nama_komentar: '', isi_komentar: '' });
        } catch (error) {
            FailedAlert('Failed to add comment. Please try again.');
        }
    };

    useEffect(() => {
        const getComment = async () => {
            try {
                const data = await readCommentPage('Photography');
                setComment(data);
            } catch (error) {
                console.error('Failed to fetch comments:', error);
            }
        };
        getComment();
    }, []);

    useEffect(() => {
        document.title = 'Photography - Admin Panel';
        const getPhotography = async () => {
            try {
                const data = await readPhotographyActive();
                setPhotography(data);
            } catch (error) {
                console.error('Failed to fetch photos:', error);
            }
        };
        getPhotography();
    }, []);

    return (
        <div className="container px-5">
            <div className=" text-center py-5">
                <h1 className="text-center pt-3">Photography</h1>
                <p className="text-center">I focus on capturing meaningful moments that leave a lasting impression. From event documentation to creative photography, I ensure each shot reflects a perfect blend of storytelling and artistic vision.</p>
                <a href="https://drive.google.com/drive/folders/1tYo-SqdJLj4Y2oAyNVVaCRDYB56dW8uA?usp=drive_link" target="_blank" rel="noopener noreferrer"><Button desc="See more →" id="button-1" /></a>
            </div>

            <hr id="line" className="mb-3"></hr>

            <div className="row pt-4 pb-5">
                {photography.map((item, index) => (
                    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12 col-xs-12 mt-4">
                        <img src={`/image/photography/${item.file_photography}`} className="d-block" style={{height: '15rem', width: '15rem', maxWidth: '100%', maxHeight: '100%', borderRadius: '0.5rem', objectFit: 'cover'}} />
                    </div>
                ))}
            </div>

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

export default Photography;
