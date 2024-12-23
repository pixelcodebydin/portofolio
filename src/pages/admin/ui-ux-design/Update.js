import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUiuxDesignCategory, readUiuxDesignCategory } from '../../../api/UiuxDesign';
import { SuccessAlert, FailedAlert } from '../../../components/Swal';

function UpdateUiuxDesign() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        kategori_ui_ux_design: '',
        deskripsi_ui_ux_design: '',
        link_ui_ux_design: '',
    });

    useEffect(() => {
        document.title = 'Update UI/UX Design Category - Admin Panel';
        const getUiuxDesignFile = async () => {
            try {
                const response = await readUiuxDesignCategory(id);
                const data = Array.isArray(response) ? response[0] : response;
                setFormData({
                    kategori_ui_ux_design: data.kategori_ui_ux_design || '',
                    deskripsi_ui_ux_design: data.deskripsi_ui_ux_design || '',
                    link_ui_ux_design: data.link_ui_ux_design || '',
                });
            } catch (error) {
                console.error('Error fetching UI/UX design data:', error);
                FailedAlert('Failed to fetch UI/UX design data.');
                navigate('/admin/ui-ux-design');
            }
        };
        getUiuxDesignFile();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateUiuxDesignCategory({ id, ...formData });
            SuccessAlert('Category updated successfully!');
            navigate('/admin/ui-ux-design');
        } catch (error) {
            console.error('Error updating UI/UX design category:', error);
            FailedAlert('Failed to update the category. Please try again.');
        }
    };

    return (
        <div className="container py-5">
            <h1 className="text-center">Update UI/UX Design Category</h1>
            <form className="mx-auto" style={{width: '80%'}} onSubmit={handleSubmit}>
                <label className="mt-4"><b>Category Name</b></label>
                <input type="text" className="form-control mt-2" name="kategori_ui_ux_design" maxLength="100" value={formData.kategori_ui_ux_design} onChange={handleChange} />

                <label className="mt-2"><b>Category Description</b></label>
                <textarea className="form-control mt-2" name="deskripsi_ui_ux_design" value={formData.deskripsi_ui_ux_design} rows="5" style={{resize: 'none'}} onChange={handleChange}></textarea>

                <label className="mt-2"><b>Link to Your Portfolio</b></label>
                <input type="text" className="form-control mt-2" name="link_ui_ux_design" value={formData.link_ui_ux_design} onChange={handleChange} />

                <button type="submit" className="mt-3 btn" style={{background: '#FF8500', color: 'white'}}>Save</button>
            </form>
        </div>
    );
};

export default UpdateUiuxDesign;
