import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';
import { readGraphicDesign, updateStatusGraphicDesign, deleteGraphicDesign } from '../../api/GraphicDesign';
import { ButtonAction } from '../../components/Button';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import { ConfirmAlert, SuccessAlert, FailedAlert } from '../../components/Swal';

function AdminGraphicDesign() {
    const [graphicDesign, setGraphicDesign] = useState([]);
    const [currentPage, setCurrentPage]     = useState(1);
    const [searchTerm, setSearchTerm]       = useState('');
    const graphicDesignPerPage              = 10;

    useEffect(() => {
        document.title = 'Graphic Design - Admin Panel';
        const getGraphicDesign = async () => {
            try {
                const data = await readGraphicDesign();
                setGraphicDesign(data);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };
        getGraphicDesign();
    }, []);

    const filteredGraphicDesign = graphicDesign.filter((item) =>
        item.kategori_graphic_design.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const lastGraphicDesign    = currentPage * graphicDesignPerPage;
    const firstGraphicDesign   = lastGraphicDesign - graphicDesignPerPage;
    const currentGraphicDesign = filteredGraphicDesign.slice(firstGraphicDesign, lastGraphicDesign);
    const totalPages           = Math.ceil(filteredGraphicDesign.length / graphicDesignPerPage);

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
                await updateStatusGraphicDesign(id, newStatus);
                setGraphicDesign(prevGraphicDesign =>
                    prevGraphicDesign.map(item =>
                        item.id_graphic_design === id ? { ...item, status_graphic_design: newStatus } : item
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
                await deleteGraphicDesign(id);
                setGraphicDesign((prevGraphicDesign) =>
                    prevGraphicDesign.filter((item) => item.id_graphic_design !== id)
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
                    <h3>Graphic Design Categories</h3>
                </div>

                <div className="col-xl-6 col-lg-7 col-md-7 col-sm-12 col-xs-12">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-xs-12 mt-1">
                            <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                        </div>

                        <div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-xs-12 mt-1">
                            <Link to={'/admin/graphic-design/add'}>
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
                        {currentGraphicDesign.length > 0 ? (
                            currentGraphicDesign.map((item, index) => (
                                <tr key={item.id_graphic_design} id="baris">
                                    <td className="text-center">{(currentPage - 1) * graphicDesignPerPage + index + 1}</td>
                                    <td>{item.kategori_graphic_design}</td>
                                    <td>{item.deskripsi_graphic_design}</td>
                                    <td className="text-center"><a href={item.link_graphic_design} target="_blank" rel="noopener noreferrer">See more</a></td>
                                    <td className="text-center">
                                        <button className={`btn ${item.status_graphic_design === 1 ? 'btn-success' : 'btn-danger'}`} onClick={() => handleStatusChange(item.id_graphic_design, item.status_graphic_design)}>
                                            {item.status_graphic_design === 1 ? 'Enable' : 'Disable'}
                                        </button>
                                    </td>

                                    <td className="text-center action">
                                        <Link to={`/admin/graphic-design/detail/${item.id_graphic_design}`}><ButtonAction btnColor="info mt-1" symbol="eye" text="" /></Link>
                                        <Link to={`/admin/graphic-design/update/${item.id_graphic_design}`}><ButtonAction btnColor="warning mt-1" symbol="pen" text="" /></Link>
                                        <button onClick={() => handleDelete(item.id_graphic_design)} className="btn btn-danger mt-1"><i className="bi bi-trash"></i></button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">No graphic design categories found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}

export default AdminGraphicDesign;
