import React from 'react';
import { Link } from 'react-router-dom';
import './css/Menu.css';

function Menu() {
    return (
        <div className="container row mx-auto">
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6 mt-3">
                <div className="card px-3 pt-3 pb-2" id="card">
                    <Link to="/admin/comments">
                        <h2 class="bi bi-chat-left-dots"></h2>
                        <p id="sum">0 comments</p>
                    </Link>
                </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6 mt-3">
                <div className="card px-3 pt-3 pb-2" id="card">
                    <Link to="/admin/graphic-design">
                        <h2 class="bi bi-vector-pen"></h2>
                        <p id="sum">0 graphic designs</p>
                    </Link>
                </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6 mt-3">
                <div className="card px-3 pt-3 pb-2" id="card">
                    <Link to="/admin/illustration">
                        <h2 class="bi bi-brush"></h2>
                        <p id="sum">0 illustrations</p>
                    </Link>
                </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6 mt-3">
                <div className="card px-3 pt-3 pb-2" id="card">
                    <Link to="/admin/ui-ux-design">
                        <h2 class="bi bi-window-stack"></h2>
                        <p id="sum">0 UI/UX designs</p>
                    </Link>
                </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6 mt-3">
                <div className="card px-3 pt-3 pb-2" id="card">
                    <Link to="/admin/photography">
                        <h2 class="bi bi-camera"></h2>
                        <p id="sum">0 photos</p>
                    </Link>
                </div>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6 mt-3">
                <div className="card px-3 pt-3 pb-2" id="card">
                    <Link to="/admin/web-development">
                        <h2 class="bi bi-globe2"></h2>
                        <p id="sum">0 websites</p>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Menu;