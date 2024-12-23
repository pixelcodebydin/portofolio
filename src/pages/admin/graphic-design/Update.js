import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { updateGraphicDesignCategory, readGraphicDesignCategory } from '../../../api/GraphicDesign';
import { SuccessAlert, FailedAlert } from '../../../components/Swal';

function UpdateGraphicDesign() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        kategori_graphic_design: '',
        deskripsi_graphic_design: '',
        link_graphic_design: '',
    });

    useEffect(() => {
        document.title = 'Update Graphic Design Category - Admin Panel';
        const getGraphicDesignFile = async () => {
            try {
                const response = await readGraphicDesignCategory(id);
                const data = Array.isArray(response) ? response[0] : response;
                setFormData({
                    kategori_graphic_design: data.kategori_graphic_design || '',
                    deskripsi_graphic_design: data.deskripsi_graphic_design || '',
                    link_graphic_design: data.link_graphic_design || '',
                });
            } catch (error) {
                console.error('Error fetching graphic design data:', error);
                FailedAlert('Failed to fetch graphic design data.');
                navigate('/admin/graphic-design');
            }
        };
        getGraphicDesignFile();
    }, [id, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateGraphicDesignCategory({ id, ...formData });
            SuccessAlert('Category updated successfully!');
            navigate('/admin/graphic-design');
        } catch (error) {
            console.error('Error updating graphic design category:', error);
            FailedAlert('Failed to update the category. Please try again.');
        }
    };

    return (
        <div className="container py-5">
            <h1 className="text-center">Update Graphic Design Category</h1>
            <form className="mx-auto" style={{width: '80%'}} onSubmit={handleSubmit}>
                <label className="mt-4"><b>Category Name</b></label>
                <input type="text" className="form-control mt-2" name="kategori_graphic_design" maxLength="100" value={formData.kategori_graphic_design} onChange={handleChange} />

                <label className="mt-2"><b>Category Description</b></label>
                <textarea className="form-control mt-2" name="deskripsi_graphic_design" value={formData.deskripsi_graphic_design} rows="5" style={{resize: 'none'}} onChange={handleChange}></textarea>

                <label className="mt-2"><b>Link to Your Portofolio</b></label>
                <input type="text" className="form-control mt-2" name="link_graphic_design" value={formData.link_graphic_design} onChange={handleChange} />

                <button type="submit" className="mt-3 btn" style={{background: '#FF8500', color: 'white'}}>Save</button>
            </form>
        </div>
    );
};

export default UpdateGraphicDesign;
