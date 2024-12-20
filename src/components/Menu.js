import React from 'react';
import { Link } from 'react-router-dom';
import './css/Menu.css';

function Menu() {
    return (
        <div className="container row mx-auto">
            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6 mt-3">
                <Link to="/admin/comments">
                    <div className="card px-3 pt-3 pb-2" id="card">
                        <h2 class="bi bi-chat-left-dots"></h2>
                        <p id="sum">0 comments</p>
                    </div>
                </Link>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6 mt-3">
                <Link to="/admin/graphic-design">
                    <div className="card px-3 pt-3 pb-2" id="card">
                        <h2 class="bi bi-vector-pen"></h2>
                        <p id="sum">0 graphic designs</p>
                    </div>
                </Link>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6 mt-3">
                <Link to="/admin/illustration">
                    <div className="card px-3 pt-3 pb-2" id="card">
                        <h2 class="bi bi-brush"></h2>
                        <p id="sum">0 illustrations</p>
                    </div>
                </Link>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6 mt-3">
                <Link to="/admin/ui-ux-design">
                    <div className="card px-3 pt-3 pb-2" id="card">
                        <h2 class="bi bi-window-stack"></h2>
                        <p id="sum">0 UI/UX designs</p>
                    </div>
                </Link>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6 mt-3">
                <Link to="/admin/photography">
                    <div className="card px-3 pt-3 pb-2" id="card">
                        <h2 class="bi bi-camera"></h2>
                        <p id="sum">0 photos</p>
                    </div>
                </Link>
            </div>

            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6 col-xs-6 mt-3">
                <Link to="/admin/web-development">
                    <div className="card px-3 pt-3 pb-2" id="card">
                        <h2 class="bi bi-globe2"></h2>
                        <p id="sum">0 websites</p>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Menu;
