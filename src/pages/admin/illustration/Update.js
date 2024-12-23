import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateIllustrationCategory, readIllustrationCategory } from '../../../api/Illustration';
import { SuccessAlert, FailedAlert } from '../../../components/Swal';

function UpdateIllustration() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        kategori_illustration: '',
        deskripsi_illustration: '',
        link_illustration: '',
    });

    useEffect(() => {
        document.title = 'Update Illustration Category - Admin Panel';
        const getIllustrationFile = async () => {
            try {
                const response = await readIllustrationCategory(id);
                const data = Array.isArray(response) ? response[0] : response;
                setFormData({
                    kategori_illustration: data.kategori_illustration || '',
                    deskripsi_illustration: data.deskripsi_illustration || '',
                    link_illustration: data.link_illustration || '',
                });
            } catch (error) {
                console.error('Error fetching illustration data:', error);
                FailedAlert('Failed to fetch illustration data.');
                navigate('/admin/illustration');
            }
        };
        getIllustrationFile();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateIllustrationCategory({ id, ...formData });
            SuccessAlert('Category updated successfully!');
            navigate('/admin/illustration');
        } catch (error) {
            console.error('Error updating illustration category:', error);
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
                <textarea className="form-control mt-2" name="deskripsi_illustration" value={formData.deskripsi_illustration} rows="5" style={{resize: 'none'}} onChange={handleChange}></textarea>

                <label className="mt-2"><b>Link to Your Portfolio</b></label>
                <input type="text" className="form-control mt-2" name="link_illustration" value={formData.link_illustration} onChange={handleChange} />

                <button type="submit" className="mt-3 btn" style={{background: '#FF8500', color: 'white'}}>Save</button>
            </form>
        </div>
    );
};

export default UpdateIllustration;
