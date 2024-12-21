import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Menu from '../../components/Menu';
import { readIllustration, updateStatusIllustration } from '../../api/Illustration';
import { Button, ButtonAction } from '../../components/Button';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import { ConfirmAlert, SuccessAlert, FailedAlert } from '../../components/Swal';

function AdminIllustration() {
    const [illustration, setIllustration] = useState([]);
    const [currentPage, setCurrentPage]   = useState(1);
    const [searchTerm, setSearchTerm]     = useState('');
    const illustrationPerPage             = 10;

    useEffect(() => {
        document.title = 'Illustration - Admin Panel';
        const getIllustration = async () => {
            try {
                const data = await readIllustration();
                setIllustration(data);
            } catch (error) {
                console.error('Failed to fetch categories:', error);
            }
        };
        getIllustration();
    }, []);

    const filteredIllustration = illustration.filter((item) =>
        item.kategori_illustration.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const lastIllustration     = currentPage * illustrationPerPage;
    const firstIllustration    = lastIllustration - illustrationPerPage;
    const currentIllustration = filteredIllustration.slice(firstIllustration, lastIllustration);
    const totalPages      = Math.ceil(filteredIllustration.length / illustrationPerPage);

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
        const isConfirmed = await ConfirmAlert(`Do you want to ${action} this category?`);

        if (isConfirmed) {
            try {
                await updateStatusIllustration(id, newStatus);
                setIllustration(prevIllustration =>
                    prevIllustration.map(item =>
                        item.id_illustration === id ? { ...item, status_illustration: newStatus } : item
                    )
                );
                SuccessAlert(`The category has been ${action}d successfully.`);
            } catch (error) {
                FailedAlert(`Failed to ${action} the category.`);
            }
        }
    };

    return (
        <div className="container py-5 mx-auto">
            <h1 className="text-center">Admin Panel</h1>
            <Menu />

            <div className="row mt-5 mb-2">
                <div className="col-xl-6 col-lg-6 col-md-5 col-sm-12 col-xs-12">
                    <h3>Illustration Categories</h3>
                </div>

                <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 col-xs-12">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} col="col-xl-9 col-lg-8 col-md-8 col-sm-7 col-xs-7" />
                    
                    <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-5">
                        <Link to={'/admin/illustration/add'}>
                            <ButtonAction btnColor="secondary" symbol="plus" text="Add" />
                        </Link>
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
                        {currentIllustration.length > 0 ? (
                            currentIllustration.map((item, index) => (
                                <tr key={item.id_illustration} id="baris">
                                    <td className="text-center">{(currentPage - 1) * illustrationPerPage + index + 1}</td>
                                    <td>{item.kategori_illustration}</td>
                                    <td>{item.deskripsi_illustration}</td>
                                    <td className="text-center"><a href={item.link_illustration}>See more</a></td>
                                    <td className="text-center">
                                        <button className={`btn ${item.status_illustration === 1 ? 'btn-success' : 'btn-danger'}`} onClick={() => handleStatusChange(item.id_illustration, item.status_illustration)}>
                                            {item.status_illustration === 1 ? 'Enable' : 'Disable'}
                                        </button>
                                    </td>

                                    <td className="text-center action">
                                        <Link to={`/admin/illustration/edit/${item.id_illustration}`}><ButtonAction btnColor="warning mt-1" symbol="pen" text="" /></Link>
                                        <Link to={`/admin/illustration/detail/${item.id_illustration}`}><ButtonAction btnColor="info mt-1" symbol="eye" text="" /></Link>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">No illustration categories found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}

export default AdminIllustration;
