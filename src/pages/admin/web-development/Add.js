import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addWebDevelopment } from '../../../api/WebDevelopment';
import { SuccessAlert, FailedAlert } from '../../../components/Swal';

function AddWebDevelopment() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        judul_web_development: '',
        deskripsi_web_development: '',
        link_web_development: '',
    });

    useEffect(() => {
        document.title = 'Add Web Development Project - Admin Panel';
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            await addWebDevelopment(formData);
            SuccessAlert('Project added successfully!');
            setFormData({ judul_web_development: '', deskripsi_web_development: '', link_web_development: '' });
            navigate('/admin/web-development');
        } catch (error) {
            FailedAlert('Failed to add the project. Please try again.');
        }
    };

    return (
        <div className="container py-5">
            <h1 className="text-center">Add Web Development Project</h1>
            <form className="mx-auto" style={{width: '80%'}} onSubmit={handleSubmit}>
                <label className="mt-4"><b>Website Name</b></label>
                <input type="text" className="form-control mt-2" name="judul_web_development" maxLength="100" value={formData.judul_web_development} onChange={handleChange} />

                <label className="mt-2"><b>Website Description</b></label>
                <textarea className="form-control mt-2" name="deskripsi_web_development" rows="5" style={{resize: 'none'}} value={formData.deskripsi_web_development} onChange={handleChange}></textarea>

                <label className="mt-2"><b>Link to Your Portfolio</b></label>
                <input type="text" className="form-control mt-2" name="link_web_development" value={formData.link_web_development} onChange={handleChange} />

                <button type="submit" className="mt-3 btn" style={{background: '#FF8500', color: 'white'}}>Save</button>
            </form>
        </div>
    );
};

export default AddWebDevelopment;
