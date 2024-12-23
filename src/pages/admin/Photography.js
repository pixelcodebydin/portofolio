import React, { useEffect, useState } from 'react';
import { readPhotography, updateStatusPhotography, deletePhotography, addPhotography } from '../../api/Photography';
import Menu from '../../components/Menu';
import Pagination from '../../components/Pagination';
import Modal from '../../components/Modal';
import { ConfirmAlert, SuccessAlert, FailedAlert } from '../../components/Swal';

function AdminPhotography() {
    const [photography, setPhotography] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [showModal, setShowModal]     = useState(false);
    const [file, setFile]               = useState(null);
    const photographyPerPage            = 10;

    useEffect(() => {
        document.title = 'Photography - Admin Panel';
        const getPhotography = async () => {
            try {
                const data = await readPhotography();
                setPhotography(data);
            } catch (error) {
                console.error('Failed to fetch photos:', error);
            }
        };
        getPhotography();
    });

    const lastPhotography    = currentPage * photographyPerPage;
    const firstPhotography   = lastPhotography - photographyPerPage;
    const currentPhotography = photography.slice(firstPhotography, lastPhotography);
    const totalPages         = Math.ceil(photography.length / photographyPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            FailedAlert('Please select a photo first.');
            return;
        }
    
        const formData = new FormData();
        formData.append('file_photography', file);
    
        try {
            await addPhotography(formData);
            SuccessAlert('Photo added successfully!');
        } catch (error) {
            console.error('Error uploading photo:', error.message);
            FailedAlert('Failed to add photo. Please try again.');
        }
    };

    const handleStatusChange = async (id, currentStatus) => {
        if (!id || typeof currentStatus !== 'number') {
            FailedAlert('Invalid photo.');
            return;
        }

        const newStatus   = currentStatus === 1 ? 0 : 1;
        const action      = newStatus === 1 ? 'enable' : 'disable';
        const isConfirmed = await ConfirmAlert(`Do you want to ${action} this photo?`);

        if (isConfirmed) {
            try {
                await updateStatusPhotography(id, newStatus);
                setPhotography(prevPhotography =>
                    prevPhotography.map(item =>
                        item.id_photography === id ? { ...item, status_photography: newStatus } : item
                    )
                );
                SuccessAlert(`Photo has been ${action}d successfully.`);
            } catch (error) {
                FailedAlert(`Failed to ${action} photo.`);
            }
        }
    };

    const handleDelete = async (id) => {
        if (!id) {
            FailedAlert('Invalid photo ID.');
            return;
        }

        const isConfirmed = await ConfirmAlert('Do you want to delete this photo?');
        if (isConfirmed) {
            try {
                await deletePhotography(id);
                setPhotography((prevPhotography) =>
                    prevPhotography.filter((item) => item.id_photography !== id)
                );
                SuccessAlert('Photo deleted successfully.');
            } catch (error) {
                FailedAlert('Failed to delete photo. Please try again.');
            }
        }
    };

    return (
        <div className="container py-5 mx-auto">
            <h1 className="text-center">Admin Panel</h1>
            <Menu />

            <div className="row mt-5 mb-2">
                <div className="col-xl-10 col-lg-10 col-md-9 col-sm-9 col-xs-9 mt-1"><h3>Photography</h3></div>
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3 mt-1">
                    <button className="btn btn-secondary" onClick={() => setShowModal(true)}><i className="bi bi-plus"></i> Add Photo</button>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr className="text-center">
                            <th>No</th>
                            <th>Preview</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentPhotography.length > 0 ? (
                            currentPhotography.map((item, index) => (
                                <tr key={item.id_photography}>
                                    <td className="text-center">{(currentPage - 1) * photographyPerPage + index + 1}</td>
                                    <td style={{width: '30rem'}}>
                                        <img src={`/image/photography/${item.file_photography}`} style={{width: '100%', borderRadius: '0.5rem'}} />
                                    </td>
                                    
                                    <td className="text-center">
                                        <button className={`btn ${item.status_photography === 1 ? 'btn-success' : 'btn-danger'}`} onClick={() => handleStatusChange(item.id_photography, item.status_photography)}>
                                            {item.status_photography === 1 ? 'Enable' : 'Disable'}
                                        </button>
                                    </td>

                                    <td className="text-center action">
                                        <button onClick={() => handleDelete(item.id_photography)} className="btn btn-danger mt-1"><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No photos found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            <Modal showModal={showModal} setShowModal={setShowModal} category="photography" onSubmit={handleSubmit} onChange={handleChange} />
        </div>
    );
}

export default AdminPhotography;
