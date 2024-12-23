import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../../components/Menu';
import { readUiuxDesign, updateStatusUiuxDesign, deleteUiuxDesign } from '../../../api/UiuxDesign';
import { ButtonAction } from '../../../components/Button';
import Pagination from '../../../components/Pagination';
import SearchBar from '../../../components/SearchBar';
import { ConfirmAlert, SuccessAlert, FailedAlert } from '../../../components/Swal';

function AdminUiuxDesign() {
    const [uiuxDesign, setUiuxDesign]   = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm]   = useState('');
    const uiuxDesignPerPage             = 10;

    useEffect(() => {
        document.title = 'UI/UX Design - Admin Panel';
        const getUiuxDesign = async () => {
            try {
                const data = await readUiuxDesign();
                setUiuxDesign(data);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };
        getUiuxDesign();
    }, []);

    const filteredUiuxDesign = uiuxDesign.filter((item) =>
        item.kategori_ui_ux_design.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const lastUiuxDesign    = currentPage * uiuxDesignPerPage;
    const firstUiuxDesign   = lastUiuxDesign - uiuxDesignPerPage;
    const currentUiuxDesign = filteredUiuxDesign.slice(firstUiuxDesign, lastUiuxDesign);
    const totalPages        = Math.ceil(filteredUiuxDesign.length / uiuxDesignPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleStatusChange = async (id, currentStatus) => {
        if (!id || typeof currentStatus !== 'number') {
            FailedAlert('Invalid category.');
            return;
        }

        const newStatus = currentStatus === 1 ? 0 : 1;
        const action = newStatus === 1 ? 'enable' : 'disable';
        const isConfirmed = await ConfirmAlert(`Do you want to ${action} this category?`);

        if (isConfirmed) {
            try {
                await updateStatusUiuxDesign(id, newStatus);
                setUiuxDesign(prevUiuxDesign =>
                    prevUiuxDesign.map(item =>
                        item.id_ui_ux_design === id ? { ...item, status_ui_ux_design: newStatus } : item
                    )
                );
                SuccessAlert(`The category has been ${action}d successfully.`);
            } catch (error) {
                FailedAlert(`Failed to ${action} the category.`);
            }
        }
    };

    const handleDelete = async (id) => {
        if (!id) {
            FailedAlert('Invalid category ID.');
            return;
        }
    
        const isConfirmed = await ConfirmAlert('Do you want to delete this category?');
    
        if (isConfirmed) {
            try {
                await deleteUiuxDesign(id);
                setUiuxDesign((prevUiuxDesign) =>
                    prevUiuxDesign.filter((item) => item.id_ui_ux_design !== id)
                );
                SuccessAlert('Category deleted successfully.');
            } catch (error) {
                FailedAlert('Failed to delete the category. Please try again.');
            }
        }
    };

    return (
        <div className="container py-5 mx-auto">
            <h1 className="text-center">Admin Panel</h1>
            <Menu />

            <div className="row mt-5 mb-2">
                <div className="col-xl-6 col-lg-5 col-md-5 col-sm-12 col-xs-12 mt-1">
                    <h3>UI/UX Design Categories</h3>
                </div>

                <div className="col-xl-6 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-xs-12 mt-1">
                            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 mt-1">
                            <Link to={'/admin/ui-ux-design/add'}>
                                <ButtonAction btnColor="secondary" symbol="plus" text="Add Category" />
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
                            <th>Category</th>
                            <th>Description</th>
                            <th>Link</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentUiuxDesign.length > 0 ? (
                            currentUiuxDesign.map((item, index) => (
                                <tr key={item.id_ui_ux_design} id="baris">
                                    <td className="text-center">{(currentPage - 1) * uiuxDesignPerPage + index + 1}</td>
                                    <td>{item.kategori_ui_ux_design}</td>
                                    <td>{item.deskripsi_ui_ux_design}</td>
                                    <td className="text-center"><a href={item.link_ui_ux_design} target="_blank" rel="noopener noreferrer">See more</a></td>
                                    <td className="text-center">
                                        <button className={`btn ${item.status_ui_ux_design === 1 ? 'btn-success' : 'btn-danger'}`} onClick={() => handleStatusChange(item.id_ui_ux_design, item.status_ui_ux_design)}>
                                            {item.status_ui_ux_design === 1 ? 'Enable' : 'Disable'}
                                        </button>
                                    </td>

                                    <td className="text-center action">
                                        <Link to={`/admin/ui-ux-design/detail/${item.id_ui_ux_design}`}><ButtonAction btnColor="info mt-1" symbol="eye" text="" /></Link>
                                        <Link to={`/admin/ui-ux-design/update/${item.id_ui_ux_design}`}><ButtonAction btnColor="warning mt-1" symbol="pen" text="" /></Link>
                                        <button onClick={() => handleDelete(item.id_ui_ux_design)} className="btn btn-danger mt-1"><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">No UI/UX design categories found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}

export default AdminUiuxDesign;
