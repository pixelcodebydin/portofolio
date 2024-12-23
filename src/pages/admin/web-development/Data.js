import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../../components/Menu';
import { readWebDevelopment, updateStatusWebDevelopment, deleteWebDevelopment } from '../../../api/WebDevelopment';
import { ButtonAction } from '../../../components/Button';
import Pagination from '../../../components/Pagination';
import SearchBar from '../../../components/SearchBar';
import { ConfirmAlert, SuccessAlert, FailedAlert } from '../../../components/Swal';

function AdminWebDevelopment() {
    const [webDevelopment, setWebDevelopment] = useState([]);
    const [currentPage, setCurrentPage]        = useState(1);
    const [searchTerm, setSearchTerm]          = useState('');
    const webDevelopmentPerPage               = 10;

    useEffect(() => {
        document.title = 'Web Development - Admin Panel';
        const getWebDevelopment = async () => {
            try {
                const data = await readWebDevelopment();
                setWebDevelopment(data);
            } catch (error) {
                console.error('Failed to fetch websites:', error);
            }
        };
        getWebDevelopment();
    }, []);

    const filteredWebDevelopment = webDevelopment.filter((item) =>
        item.judul_web_development.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const lastWebDevelopment    = currentPage * webDevelopmentPerPage;
    const firstWebDevelopment   = lastWebDevelopment - webDevelopmentPerPage;
    const currentWebDevelopment = filteredWebDevelopment.slice(firstWebDevelopment, lastWebDevelopment);
    const totalPages            = Math.ceil(filteredWebDevelopment.length / webDevelopmentPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleStatusChange = async (id, currentStatus) => {
        if (!id || typeof currentStatus !== 'number') {
            FailedAlert('Invalid project.');
            return;
        }

        const newStatus = currentStatus === 1 ? 0 : 1;
        const action = newStatus === 1 ? 'enable' : 'disable';
        const isConfirmed = await ConfirmAlert(`Do you want to ${action} this project?`);

        if (isConfirmed) {
            try {
                await updateStatusWebDevelopment(id, newStatus);
                setWebDevelopment(prevWebDevelopment =>
                    prevWebDevelopment.map(item =>
                        item.id_web_development === id ? { ...item, status_web_development: newStatus } : item
                    )
                );
                SuccessAlert(`The project has been ${action}d successfully.`);
            } catch (error) {
                FailedAlert(`Failed to ${action} the project.`);
            }
        }
    };

    const handleDelete = async (id) => {
        if (!id) {
            FailedAlert('Invalid project ID.');
            return;
        }
    
        const isConfirmed = await ConfirmAlert('Do you want to delete this project?');
    
        if (isConfirmed) {
            try {
                await deleteWebDevelopment(id);
                setWebDevelopment((prevWebDevelopment) =>
                    prevWebDevelopment.filter((item) => item.id_web_development !== id)
                );
                SuccessAlert('Project deleted successfully.');
            } catch (error) {
                FailedAlert('Failed to delete the project. Please try again.');
            }
        }
    };

    return (
        <div className="container py-5 mx-auto">
            <h1 className="text-center">Admin Panel</h1>
            <Menu />

            <div className="row mt-5 mb-2">
                <div className="col-xl-6 col-lg-5 col-md-5 col-sm-12 col-xs-12 mt-1">
                    <h3>Web Development Projects</h3>
                </div>

                <div className="col-xl-6 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-xs-12 mt-1">
                            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 mt-1">
                            <Link to={'/admin/web-development/add'}>
                                <ButtonAction btnColor="secondary" symbol="plus" text="Add Project" />
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
                            <th>Project</th>
                            <th>Description</th>
                            <th>Link</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentWebDevelopment.length > 0 ? (
                            currentWebDevelopment.map((item, index) => (
                                <tr key={item.id_web_development} id="baris">
                                    <td className="text-center">{(currentPage - 1) * webDevelopmentPerPage + index + 1}</td>
                                    <td>{item.judul_web_development}</td>
                                    <td>{item.deskripsi_web_development}</td>
                                    <td className="text-center">{item.link_web_development ? (<a href={item.link_web_development} target="_blank" rel="noopener noreferrer">See more</a>) : (<></>)}</td>
                                    <td className="text-center">
                                        <button className={`btn ${item.status_web_development === 1 ? 'btn-success' : 'btn-danger'}`} onClick={() => handleStatusChange(item.id_web_development, item.status_web_development)}>
                                            {item.status_web_development === 1 ? 'Enable' : 'Disable'}
                                        </button>
                                    </td>

                                    <td className="text-center action">
                                        <Link to={`/admin/web-development/detail/${item.id_web_development}`}><ButtonAction btnColor="info mt-1" symbol="eye" text="" /></Link>
                                        <Link to={`/admin/web-development/update/${item.id_web_development}`}><ButtonAction btnColor="warning mt-1" symbol="pen" text="" /></Link>
                                        <button onClick={() => handleDelete(item.id_web_development)} className="btn btn-danger mt-1"><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">No websites found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}

export default AdminWebDevelopment;
