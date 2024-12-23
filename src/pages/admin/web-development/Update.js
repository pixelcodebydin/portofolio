import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateWebDevelopmentCategory, readWebDevelopmentCategory } from '../../../api/WebDevelopment';
import { SuccessAlert, FailedAlert } from '../../../components/Swal';

function UpdateWebDevelopment() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        judul_web_development: '',
        deskripsi_web_development: '',
        link_web_development: '',
    });

    useEffect(() => {
        document.title = 'Update Web Development Project - Admin Panel';
        const getWebDevelopmentFile = async () => {
            try {
                const response = await readWebDevelopmentCategory(id);
                const data = Array.isArray(response) ? response[0] : response;
                setFormData({
                    judul_web_development: data.judul_web_development || '',
                    deskripsi_web_development: data.deskripsi_web_development || '',
                    link_web_development: data.link_web_development || '',
                });
            } catch (error) {
                console.error('Error fetching website data:', error);
                FailedAlert('Failed to fetch website data.');
                navigate('/admin/web-development');
            }
        };
        getWebDevelopmentFile();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateWebDevelopmentCategory({ id, ...formData });
            SuccessAlert('Project updated successfully!');
            navigate('/admin/web-development');
        } catch (error) {
            console.error('Error updating website:', error);
            FailedAlert('Failed to update the project. Please try again.');
        }
    };

    return (
        <div className="container py-5">
            <h1 className="text-center">Update Web Development Project</h1>
            <form className="mx-auto" style={{width: '80%'}} onSubmit={handleSubmit}>
                <label className="mt-4"><b>Website Name</b></label>
                <input type="text" className="form-control mt-2" name="judul_web_development" maxLength="100" value={formData.judul_web_development} onChange={handleChange} />

                <label className="mt-2"><b>Website Description</b></label>
                <textarea className="form-control mt-2" name="deskripsi_web_development" value={formData.deskripsi_web_development} rows="5" style={{resize: 'none'}} onChange={handleChange}></textarea>

                <label className="mt-2"><b>Link to Your Portfolio</b></label>
                <input type="text" className="form-control mt-2" name="link_web_development" value={formData.link_web_development} onChange={handleChange} />

                <button type="submit" className="mt-3 btn" style={{background: '#FF8500', color: 'white'}}>Save</button>
            </form>
        </div>
    );
};

export default UpdateWebDevelopment;
