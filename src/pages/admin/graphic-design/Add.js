import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addGraphicDesign } from '../../../api/GraphicDesign';
import { SuccessAlert, FailedAlert } from '../../../components/Swal';

function AddGraphicDesign() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        kategori_graphic_design: '',
        deskripsi_graphic_design: '',
        link_graphic_design: '',
    });

    useEffect(() => {
        document.title = 'Add Graphic Design Category - Admin Panel';
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);

        try {
            await addGraphicDesign(formData);
            SuccessAlert('Category added successfully!');
            setFormData({ kategori_graphic_design: '', deskripsi_graphic_design: '', link_graphic_design: '' });
            navigate('/admin/graphic-design');
        } catch (error) {
            FailedAlert('Failed to add the category. Please try again.');
        }
    };

    return (
        <div className="container py-5">
            <h1 className="text-center">Add Graphic Design Category</h1>
            <form className="mx-auto" style={{width: '80%'}} onSubmit={handleSubmit}>
                <label className="mt-4"><b>Category Name</b></label>
                <input type="text" className="form-control mt-2" name="kategori_graphic_design" maxLength="100" value={formData.kategori_graphic_design} onChange={handleChange} />

                <label className="mt-2"><b>Category Description</b></label>
                <textarea className="form-control mt-2" name="deskripsi_graphic_design" rows="5" style={{resize: 'none'}} value={formData.deskripsi_graphic_design} onChange={handleChange}></textarea>

                <label className="mt-2"><b>Link to Your Portfolio</b></label>
                <input type="text" className="form-control mt-2" name="link_graphic_design" value={formData.link_graphic_design} onChange={handleChange} />

                <button type="submit" className="mt-3 btn" style={{background: '#FF8500', color: 'white'}}>Save</button>
            </form>
        </div>
    );
};

export default AddGraphicDesign;
