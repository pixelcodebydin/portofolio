import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readGraphicDesignFile, updateStatusGraphicDesignFile, deleteGraphicDesignFile, readGraphicDesignCategory, addGraphicDesignFile } from '../../../api/GraphicDesign';
import Menu from '../../../components/Menu';
import Pagination from '../../../components/Pagination';
import Modal from '../../../components/Modal';
import { ConfirmAlert, SuccessAlert, FailedAlert } from '../../../components/Swal';

function DetailGraphicDesign() {
    const { id } = useParams();
    const [graphicDesign, setGraphicDesignFile] = useState([]);
    const [categoryName, setCategoryName]       = useState('');
    const [currentPage, setCurrentPage]         = useState(1);
    const [showModal, setShowModal]             = useState(false);
    const [file, setFile]                       = useState(null);
    const graphicDesignFilePerPage              = 10;

    useEffect(() => {
        const getGraphicDesignCategory = async () => {
            try {
                const data = await readGraphicDesignCategory(id);
                if (data && data.kategori_graphic_design) {
                    setCategoryName(data.kategori_graphic_design);
                    document.title = `${data.kategori_graphic_design} - Admin Panel`;
                } else {
                    console.error('Category not found.');
                    document.title = 'Graphic Design - Admin Panel';
                }
            } catch (error) {
                console.error('Failed to fetch graphic design category:', error);
                document.title = 'Graphic Design - Admin Panel';
            }
        };

        const getGraphicDesignFile = async () => {
            try {
                const data = await readGraphicDesignFile(id);
                setGraphicDesignFile(data);
            } catch (error) {
                console.error('Failed to fetch graphic design files:', error);
            }
        };

        getGraphicDesignCategory();
        getGraphicDesignFile();
    }, [id]);

    const lastGraphicDesignFile    = currentPage * graphicDesignFilePerPage;
    const firstGraphicDesignFile   = lastGraphicDesignFile - graphicDesignFilePerPage;
    const currentGraphicDesignFile = graphicDesign.slice(firstGraphicDesignFile, lastGraphicDesignFile);
    const totalPages               = Math.ceil(graphicDesign.length / graphicDesignFilePerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) {
            FailedAlert('Please select a file first.');
            return;
        }
    
        const formData = new FormData();
        formData.append('file_graphic_design', file);
    
        try {
            await addGraphicDesignFile(id, formData);
            SuccessAlert('File added successfully!');
        } catch (error) {
            console.error('Error uploading file:', error.message);
            FailedAlert('Failed to add the file. Please try again.');
        }
    };

    const handleStatusChange = async (id, currentStatus) => {
        if (!id || typeof currentStatus !== 'number') {
            FailedAlert('Invalid file.');
            return;
        }

        const newStatus   = currentStatus === 1 ? 0 : 1;
        const action      = newStatus === 1 ? 'enable' : 'disable';
        const isConfirmed = await ConfirmAlert(`Do you want to ${action} this file?`);

        if (isConfirmed) {
            try {
                await updateStatusGraphicDesignFile(id, newStatus);
                setGraphicDesignFile(prevGraphicDesignFile =>
                    prevGraphicDesignFile.map(item =>
                        item.id_file_graphic_design === id ? { ...item, status_file_graphic_design: newStatus } : item
                    )
                );
                SuccessAlert(`File has been ${action}d successfully.`);
            } catch (error) {
                FailedAlert(`Failed to ${action} the file.`);
            }
        }
    };

    const handleDelete = async (id) => {
        if (!id) {
            FailedAlert('Invalid file ID.');
            return;
        }

        const isConfirmed = await ConfirmAlert('Do you want to delete this file?');
        if (isConfirmed) {
            try {
                await deleteGraphicDesignFile(id);
                setGraphicDesignFile((prevGraphicDesignFile) =>
                    prevGraphicDesignFile.filter((item) => item.id_file_graphic_design !== id)
                );
                SuccessAlert('File deleted successfully.');
            } catch (error) {
                FailedAlert('Failed to delete the file. Please try again.');
            }
        }
    };

    return (
        <div className="container py-5 mx-auto">
            <h1 className="text-center">Admin Panel</h1>
            <Menu />

            <div className="row mt-5 mb-2">
                <div className="col-xl-10 col-lg-10 col-md-9 col-sm-9 col-xs-9 mt-1"><h3>{categoryName}</h3></div>
                <div className="col-xl-2 col-lg-2 col-md-3 col-sm-3 col-xs-3 mt-1">
                    <button className="btn btn-secondary" onClick={() => setShowModal(true)}><i className="bi bi-plus"></i> Add File</button>
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
                        {currentGraphicDesignFile.length > 0 ? (
                            currentGraphicDesignFile.map((item, index) => (
                                <tr key={item.id_file_graphic_design}>
                                    <td className="text-center">{(currentPage - 1) * graphicDesignFilePerPage + index + 1}</td>
                                    <td style={{width: '30rem'}}>
                                        <img src={`/image/graphic-design/${item.file_graphic_design}`} style={{width: '100%', borderRadius: '0.5rem'}} />
                                    </td>
                                    
                                    <td className="text-center">
                                        <button className={`btn ${item.status_file_graphic_design === 1 ? 'btn-success' : 'btn-danger'}`} onClick={() => handleStatusChange(item.id_file_graphic_design, item.status_file_graphic_design)}>
                                            {item.status_file_graphic_design === 1 ? 'Enable' : 'Disable'}
                                        </button>
                                    </td>

                                    <td className="text-center action">
                                        <button onClick={() => handleDelete(item.id_file_graphic_design)} className="btn btn-danger mt-1"><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No graphic design files found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            <Modal showModal={showModal} setShowModal={setShowModal} category="graphic_design" onSubmit={handleSubmit} onChange={handleChange} />
        </div>
    );
}

export default DetailGraphicDesign;
