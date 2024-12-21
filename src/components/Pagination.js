import React from 'react';

function Pagination({ totalPages, currentPage, handlePageChange }) {
    return (
        <div className="justify-content-center">
            <ul className="pagination">
                {[...Array(totalPages).keys()].map((page) => (
                    <li key={page + 1} className={`page-item ${currentPage === page + 1 ? 'active' : ''}`}>
                        <button className="page-link" onClick={() => handlePageChange(page + 1)}>{page + 1}</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Pagination;
