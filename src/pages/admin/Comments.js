import React, { useEffect, useState } from 'react';
import Menu from '../../components/Menu';
import DateFormat from '../../components/DateFormat';
import { readComment, updateStatusComment } from '../../api/Comments';
import Pagination from '../../components/Pagination';
import SearchBar from '../../components/SearchBar';
import { ConfirmAlert, SuccessAlert, FailedAlert } from '../../components/Swal';

function AdminComments() {
    const [comment, setComment]       = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm]   = useState('');
    const commentsPerPage               = 10;

    useEffect(() => {
        document.title = 'Comments - Admin Panel';
        const getComment = async () => {
            try {
                const data = await readComment();
                setComment(data);
            } catch (error) {
                console.error('Failed to fetch comments:', error);
            }
        };
        getComment();
    }, []);

    const filteredComment = comment.filter((item) =>
        item.nama_komentar.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.isi_komentar.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.halaman_komentar.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const lastComment     = currentPage * commentsPerPage;
    const firstComment    = lastComment - commentsPerPage;
    const currentComments = filteredComment.slice(firstComment, lastComment);
    const totalPages      = Math.ceil(filteredComment.length / commentsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const handleStatusChange = async (id, currentStatus) => {
        if (!id || typeof currentStatus !== 'number') {
            FailedAlert('Invalid comment data.');
            return;
        }

        const newStatus = currentStatus === 1 ? 0 : 1;
        const action = newStatus === 1 ? 'enable' : 'disable';
        const isConfirmed = await ConfirmAlert(`Do you want to ${action} this comment?`);

        if (isConfirmed) {
            try {
                await updateStatusComment(id, newStatus);
                setComment(prevComment =>
                    prevComment.map(item =>
                        item.id_komentar === id ? { ...item, status_komentar: newStatus } : item
                    )
                );
                SuccessAlert(`Comment has been ${action}d successfully.`);
            } catch (error) {
                FailedAlert(`Failed to ${action} the comment.`);
            }
        }
    };

    return (
        <div className="container py-5 mx-auto">
            <h1 className="text-center">Admin Panel</h1>
            <Menu />

            <div className="row mt-5 mb-2">
                <div className="col-xl-8 col-lg-8 col-md-6 col-sm-6 col-xs-6">
                    <h3>Comments List</h3>
                </div>

                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-xs-6">
                    <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-bordered table-striped">
                    <thead>
                        <tr className="text-center">
                            <th>No</th>
                            <th>Name</th>
                            <th>Comments</th>
                            <th>Page</th>
                            <th>Date & Time</th>
                            <th>Status</th>
                        </tr>
                    </thead>

                    <tbody>
                        {currentComments.length > 0 ? (
                            currentComments.map((item, index) => (
                                <tr key={item.id_komentar}>
                                    <td className="text-center">{(currentPage - 1) * commentsPerPage + index + 1}</td>
                                    <td>{item.nama_komentar}</td>
                                    <td>{item.isi_komentar}</td>
                                    <td>{item.halaman_komentar}</td>
                                    <td className="text-center"><DateFormat dateString={item.waktu_komentar} /></td>
                                    <td className="text-center">
                                        <button className={`btn ${item.status_komentar === 1 ? 'btn-success' : 'btn-danger'}`} onClick={() => handleStatusChange(item.id_komentar, item.status_komentar)}>
                                            {item.status_komentar === 1 ? 'Enable' : 'Disable'}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="6" className="text-center">No comments found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            <Pagination totalPages={totalPages} currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
    );
}

export default AdminComments;
