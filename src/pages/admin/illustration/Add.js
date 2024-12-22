import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addIllustration } from '../../../api/Illustration';
import { SuccessAlert, FailedAlert } from '../../../components/Swal';

function AddIllustration() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        kategori_illustration: '',
        deskripsi_illustration: '',
        link_illustration: '',
    });

    useEffect(() => {
        document.title = 'Add Illustration Category - Admin Panel';
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            await addIllustration(formData);
            SuccessAlert('Category added successfully!');
            setFormData({ kategori_illustration: '', deskripsi_illustration: '', link_illustration: '' });
            navigate('/admin/illustration');
        } catch (error) {
            FailedAlert('Failed to add the category. Please try again.');
        }
    };

    return (
        <div className="container py-5">
            <h1 className="text-center">Add Illustration Category</h1>
            <form className="mx-auto" style={{width: '80%'}} onSubmit={handleSubmit}>
                <label className="mt-4"><b>Category Name</b></label>
                <input type="text" className="form-control mt-2" name="kategori_illustration" maxLength="100" value={formData.kategori_illustration} onChange={handleChange} />

                <label className="mt-2"><b>Category Description</b></label>
                <textarea className="form-control mt-2" name="deskripsi_illustration" rows="5" style={{resize: 'none'}} value={formData.deskripsi_illustration} onChange={handleChange}></textarea>

                <label className="mt-2"><b>Link to Your Portofolio</b></label>
                <input type="text" className="form-control mt-2" name="link_illustration" value={formData.link_illustration} onChange={handleChange} />

                <button type="submit" className="mt-3 btn" style={{background: '#FF8500', color: 'white'}}>Save</button>
            </form>
        </div>
    );
};

export default AddIllustration;
