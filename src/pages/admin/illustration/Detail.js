import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Menu from '../../../components/Menu';
import { readIllustrationData, updateStatusIllustrationData, deleteIllustrationData } from '../../../api/Illustration';
import { ButtonAction } from '../../../components/Button';
import Pagination from '../../../components/Pagination';
import { ConfirmAlert, SuccessAlert, FailedAlert } from '../../../components/Swal';

function DetailIllustrationCategory() {
    const { id }                                  = useParams();
    const [illustration, setIllustrationData] = useState([]);
    const [currentPage, setCurrentPage]   = useState(1);
    const [searchTerm, setSearchTerm]     = useState('');
    const illustrationPerPage             = 10;

    useEffect(() => {
        document.title = 'Illustration - Admin Panel';
        const getIllustration = async () => {
            try {
                const data = await readIllustrationData(id);
                setIllustrationData(data);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };
        getIllustration();
    }, []);

    const filteredIllustration = illustration.filter((item) =>
        item.id_illustration.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const lastIllustration    = currentPage * illustrationPerPage;
    const firstIllustration   = lastIllustration - illustrationPerPage;
    const currentIllustration = filteredIllustration.slice(firstIllustration, lastIllustration);
    const totalPages          = Math.ceil(filteredIllustration.length / illustrationPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleStatusChange = async (id, currentStatus) => {
        if (!id || typeof currentStatus !== 'number') {
            FailedAlert('Invalid category data.');
            return;
        }

        const newStatus = currentStatus === 1 ? 0 : 1;
        const action = newStatus === 1 ? 'enable' : 'disable';
        const isConfirmed = await ConfirmAlert(`Do you want to ${action} this file?`);
        if (isConfirmed) {
            try {
                await updateStatusIllustrationData(id, newStatus);
                setIllustrationData(prevIllustrationData =>
                    prevIllustrationData.map(item =>
                        item.id_file_illustration === id ? { ...item, status_file_illustration: newStatus } : item
                    )
                );
                SuccessAlert(`File has been ${action}d successfully.`);
            } catch (error) {
                FailedAlert(`Failed to ${action} file.`);
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
                await deleteIllustrationData(id);
                setIllustrationData((prevIllustrationData) =>
                    prevIllustrationData.filter((item) => item.id_file_illustration !== id)
                );
                SuccessAlert('File deleted successfully.');
            } catch (error) {
                FailedAlert('Failed to delete file. Please try again.');
            }
        }
    };

    return (
        <div className="container py-5 mx-auto">
            <h1 className="text-center">Admin Panel</h1>
            <Menu />

            <div className="row mt-5 mb-2">
                <div className="col-xl-6 col-lg-5 col-md-5 col-sm-12 col-xs-12 mt-1">
                    <h3>Illustration Categories</h3>
                </div>

                <div className="col-xl-6 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-1">
                            <Link to={'/admin/illustration/add'}>
                                <ButtonAction btnColor="secondary" symbol="plus" text="Add File" />
                            </Link>
                        </div>
                    </div>
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
                        {currentIllustration.length > 0 ? (
                            currentIllustration.map((item, index) => (
                                <tr key={item.id_file_illustration} id="baris">
                                    <td className="text-center">{(currentPage - 1) * illustrationPerPage + index + 1}</td>
                                    <td className="text-center"><img src={`/image/illustration/${item.file_illustration}`} alt="Preview" /></td>
                                    <td className="text-center">
                                        <button className={`btn ${item.status_file_illustration === 1 ? 'btn-success' : 'btn-danger'}`} onClick={() => handleStatusChange(item.id_file_illustration, item.status_file_illustration)}>
                                            {item.status_file_illustration === 1 ? 'Enable' : 'Disable'}
                                        </button>
                                    </td>

                                    <td className="text-center action">
                                        <Link to={'/'}><ButtonAction btnColor="warning mt-1" symbol="pen" text="" /></Link>
                                        <button onClick={() => handleDelete(item.id_file_illustration)} className="btn btn-danger mt-1"><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No illustrations found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}

export default DetailIllustrationCategory;
