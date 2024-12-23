import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { readWebDevelopmentFile, updateStatusWebDevelopmentFile, deleteWebDevelopmentFile, readWebDevelopmentCategory, addWebDevelopmentFile } from '../../../api/WebDevelopment';
import Menu from '../../../components/Menu';
import Pagination from '../../../components/Pagination';
import Modal from '../../../components/Modal';
import { ConfirmAlert, SuccessAlert, FailedAlert } from '../../../components/Swal';

function DetailWebDevelopment() {
    const { id } = useParams();
    const [webDevelopment, setWebDevelopmentFile] = useState([]);
    const [websiteName, setWebsiteName]       = useState('');
    const [currentPage, setCurrentPage]         = useState(1);
    const [showModal, setShowModal]             = useState(false);
    const [file, setFile]                       = useState(null);
    const webDevelopmentFilePerPage              = 10;

    useEffect(() => {
        const getWebDevelopmentCategory = async () => {
            try {
                const data = await readWebDevelopmentCategory(id);
                if (data.length > 0) {
                    setWebsiteName(data[0].judul_web_development);
                    document.title = `${data[0].judul_web_development} - Admin Panel`;
                }
            } catch (error) {
                console.error('Failed to fetch website:', error);
                document.title = 'Web Development - Admin Panel';
            }
        };

        const getWebDevelopmentFile = async () => {
            try {
                const data = await readWebDevelopmentFile(id);
                setWebDevelopmentFile(data);
            } catch (error) {
                console.error('Failed to fetch website files:', error);
            }
        };

        getWebDevelopmentCategory();
        getWebDevelopmentFile();
    }, [id]);

    const lastWebDevelopmentFile    = currentPage * webDevelopmentFilePerPage;
    const firstWebDevelopmentFile   = lastWebDevelopmentFile - webDevelopmentFilePerPage;
    const currentWebDevelopmentFile = webDevelopment.slice(firstWebDevelopmentFile, lastWebDevelopmentFile);
    const totalPages                = Math.ceil(webDevelopment.length / webDevelopmentFilePerPage);

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
        formData.append('file_web_development', file);
    
        try {
            await addWebDevelopmentFile(id, formData);
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
                await updateStatusWebDevelopmentFile(id, newStatus);
                setWebDevelopmentFile(prevWebDevelopmentFile =>
                    prevWebDevelopmentFile.map(item =>
                        item.id_file_web_development === id ? { ...item, status_file_web_development: newStatus } : item
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
                await deleteWebDevelopmentFile(id);
                setWebDevelopmentFile((prevWebDevelopmentFile) =>
                    prevWebDevelopmentFile.filter((item) => item.id_file_web_development !== id)
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
                <div className="col-xl-10 col-lg-10 col-md-9 col-sm-9 col-xs-9 mt-1"><h3>{websiteName}</h3></div>
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
                        {currentWebDevelopmentFile.length > 0 ? (
                            currentWebDevelopmentFile.map((item, index) => (
                                <tr key={item.id_file_web_development}>
                                    <td className="text-center">{(currentPage - 1) * webDevelopmentFilePerPage + index + 1}</td>
                                    <td style={{width: '30rem'}}>
                                        <img src={`/image/web-development/${item.file_web_development}`} style={{width: '100%', borderRadius: '0.5rem'}} />
                                    </td>
                                    
                                    <td className="text-center">
                                        <button className={`btn ${item.status_file_web_development === 1 ? 'btn-success' : 'btn-danger'}`} onClick={() => handleStatusChange(item.id_file_web_development, item.status_file_web_development)}>
                                            {item.status_file_web_development === 1 ? 'Enable' : 'Disable'}
                                        </button>
                                    </td>

                                    <td className="text-center action">
                                        <button onClick={() => handleDelete(item.id_file_web_development)} className="btn btn-danger mt-1"><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No website files found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
            <Modal showModal={showModal} setShowModal={setShowModal} category="web_development" onSubmit={handleSubmit} onChange={handleChange} />
        </div>
    );
}

export default DetailWebDevelopment;
