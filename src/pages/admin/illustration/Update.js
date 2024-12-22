import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateIllustration, readIllustrationData } from '../../../api/Illustration';
import { SuccessAlert, FailedAlert } from '../../../components/Swal';

function UpdateIllustrationCategory() {
    const { id }                  = useParams();
    const navigate                = useNavigate();
    const [formData, setFormData] = useState({
        kategori_illustration: '',
        deskripsi_illustration: '',
        link_illustration: '',
    });

    useEffect(() => {
        document.title = 'Update Illustration Category - Admin Panel';
        const getIllustrationData = async () => {
            try {
                const response = await readIllustrationData(id); // Gunakan ID dari URL
                setFormData({
                    kategori_illustration: response.kategori_illustration,
                    deskripsi_illustration: response.deskripsi_illustration,
                    link_illustration: response.link_illustration,
                });
            } catch (error) {
                FailedAlert('Failed to fetch illustration data.');
                navigate('/admin/illustration');
            }
        };
        getIllustrationData();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateIllustration({ id, ...formData });
            SuccessAlert('Category updated successfully!');
            navigate('/admin/illustration');
        } catch (error) {
            FailedAlert('Failed to update the category. Please try again.');
        }
    };

    return (
        <div className="container py-5">
            <h1 className="text-center">Update Illustration Category</h1>
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

export default UpdateIllustrationCategory;
