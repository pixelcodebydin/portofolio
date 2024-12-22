import React from 'react';
import './css/Modal.css';

function ModalAddFile({ showModal, setShowModal, category, onSubmit, onChange, idCategory }) {
    return (
        <>
            {showModal && <div className="modal-overlay"></div>} {/* Conditionally render overlay */}
            <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" aria-hidden="true" style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" style={{ fontFamily: 'Lato' }}>Add Image</h5>
                            <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                        </div>

                        <form onSubmit={onSubmit}>
                            <div className="modal-body">
                                <div className="mb-2">
                                    <input type="hidden" value={idCategory} name="id_illustration" />
                                    <label><b>Upload File</b></label>
                                    <input type="file" className="form-control mt-2" name={`file_${category}`} accept="image/jpeg, image/jpg, image/png" onChange={onChange} />
                                </div>
                            </div>

                            <div className="modal-footer">
                                <div className="row gap-1">
                                    <button type="submit" className="btn col" style={{ background: '#FF8500', color: 'white' }}>Save</button>
                                    <button type="button" className="btn col btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ModalAddFile;
