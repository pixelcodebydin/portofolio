import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readUiuxDesignFile, updateStatusUiuxDesignFile, deleteUiuxDesignFile, readUiuxDesignCategory, addUiuxDesignFile } from '../../../api/UiuxDesign';
import Menu from '../../../components/Menu';
import Pagination from '../../../components/Pagination';
import Modal from '../../../components/Modal';
import { ConfirmAlert, SuccessAlert, FailedAlert } from '../../../components/Swal';

function DetailUiuxDesign() {
    const { id } = useParams();
    const [uiuxDesign, setUiuxDesignFile] = useState([]);
    const [categoryName, setCategoryName]       = useState('');
    const [currentPage, setCurrentPage]         = useState(1);
    const [showModal, setShowModal]             = useState(false);
    const [file, setFile]                       = useState(null);
    const uiuxDesignFilePerPage              = 10;

    useEffect(() => {
        const getUiuxDesignCategory = async () => {
            try {
                const data = await readUiuxDesignCategory(id);
                if (data.length > 0) {
                    setCategoryName(data[0].kategori_ui_ux_design);
                    document.title = `${data[0].kategori_ui_ux_design} - Admin Panel`;
                }
            } catch (error) {
                console.error('Failed to fetch UI/UX design category:', error);
                document.title = 'UI/UX Design - Admin Panel';
            }
        };

        const getUiuxDesignFile = async () => {
            try {
                const data = await readUiuxDesignFile(id);
                setUiuxDesignFile(data);
            } catch (error) {
                console.error('Failed to fetch UI/UX design files:', error);
            }
        };

        getUiuxDesignCategory();
        getUiuxDesignFile();
    }, [id]);

    const lastUiuxDesignFile    = currentPage * uiuxDesignFilePerPage;
    const firstUiuxDesignFile   = lastUiuxDesignFile - uiuxDesignFilePerPage;
    const currentUiuxDesignFile = uiuxDesign.slice(firstUiuxDesignFile, lastUiuxDesignFile);
    const totalPages               = Math.ceil(uiuxDesign.length / uiuxDesignFilePerPage);

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
        formData.append('file_ui_ux_design', file);
    
        try {
            await addUiuxDesignFile(id, formData);
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
                await updateStatusUiuxDesignFile(id, newStatus);
                setUiuxDesignFile(prevUiuxDesignFile =>
                    prevUiuxDesignFile.map(item =>
                        item.id_file_ui_ux_design === id ? { ...item, status_file_ui_ux_design: newStatus } : item
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
                await deleteUiuxDesignFile(id);
                setUiuxDesignFile((prevUiuxDesignFile) =>
                    prevUiuxDesignFile.filter((item) => item.id_file_ui_ux_design !== id)
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
                        {currentUiuxDesignFile.length > 0 ? (
                            currentUiuxDesignFile.map((item, index) => (
                                <tr key={item.id_file_ui_ux_design}>
                                    <td className="text-center">{(currentPage - 1) * uiuxDesignFilePerPage + index + 1}</td>
                                    <td style={{width: '30rem'}}>
                                        <img src={`/image/ui-ux-design/${item.file_ui_ux_design}`} style={{width: '100%', borderRadius: '0.5rem'}} />
                                    </td>
                                    
                                    <td className="text-center">
                                        <button className={`btn ${item.status_file_ui_ux_design === 1 ? 'btn-success' : 'btn-danger'}`} onClick={() => handleStatusChange(item.id_file_ui_ux_design, item.status_file_ui_ux_design)}>
                                            {item.status_file_ui_ux_design === 1 ? 'Enable' : 'Disable'}
                                        </button>
                                    </td>

                                    <td className="text-center action">
                                        <button onClick={() => handleDelete(item.id_file_ui_ux_design)} className="btn btn-danger mt-1"><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No UI/UX design files found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            <Modal showModal={showModal} setShowModal={setShowModal} category="ui_ux_design" onSubmit={handleSubmit} onChange={handleChange} />
        </div>
    );
}

export default DetailUiuxDesign;
