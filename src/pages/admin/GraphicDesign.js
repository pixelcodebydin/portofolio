import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import DateFormat from '../../components/DateFormat';
import { readGraphicDesign, updateStatusGraphicDesign } from '../../api/GraphicDesign';
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
                console.error('Failed to fetch designs:', error);
            }
        };
        getGraphicDesign();
    }, []);

    const filteredGraphicDesign = graphicDesign.filter((item) =>
        item.judul_graphic_design.toLowerCase().includes(searchTerm.toLowerCase())
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
            FailedAlert('Invalid design data.');
            return;
        }

        const newStatus = currentStatus === 1 ? 0 : 1;
        const action = newStatus === 1 ? 'enable' : 'disable';
        const isConfirmed = await ConfirmAlert(`Do you want to ${action} this design?`);

        if (isConfirmed) {
            try {
                await updateStatusGraphicDesign(id, newStatus);
                setGraphicDesign(prevGraphicDesign =>
                    prevGraphicDesign.map(item =>
                        item.id_graphic_design === id ? { ...item, status_graphic_design: newStatus } : item
                    )
                );
                SuccessAlert(`Design has been ${action}d successfully.`);
            } catch (error) {
                FailedAlert(`Failed to ${action} the design.`);
            }
        }
    };

    return (
        <div className="container py-5 mx-auto">
            <h1 className="text-center">Admin Panel</h1>
            <Menu />

            <div className="row mt-5 mb-2">
                <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 col-xs-6">
                    <h3>Graphic Designs List</h3>
                </div>

                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>

            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr className="text-center">
                            <th>No</th>
                            <th>Title</th>
                            <th>Description</th>
                            <th>Link</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentGraphicDesign.length > 0 ? (
                            currentGraphicDesign.map((item, index) => (
                                <tr key={item.id_graphic_design}>
                                    <td className="text-center">{(currentPage - 1) * graphicDesignPerPage + index + 1}</td>
                                    <td>{item.judul_graphic_design}</td>
                                    <td>{item.deskripsi_graphic_design}</td>
                                    <td className="text-center"><a href={item.link_graphic_design} target="_blank" rel="noopener noreferrer">See more</a></td>
                                    <td className="text-center">
                                        <button className={`btn ${item.status_graphic_design === 1 ? 'btn-success' : 'btn-danger'}`} onClick={() => handleStatusChange(item.id_graphic_design, item.status_graphic_design)}>
                                            {item.status_graphic_design === 1 ? 'Enable' : 'Disable'}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" className="text-center">No graphic designs found.</td>
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
