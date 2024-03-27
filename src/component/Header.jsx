import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="container">
            <div className="row"><div className="col-12">
                <button type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler btn btn-primary">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a aria-current="page" className="nav-link px-0 pe-4 active fw-bold" href="/users">Users</a></li>
                        <li className="nav-item"><a className="nav-link px-0 pe-4" href="/photos">Photos</a></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        </nav>

    );
};

export default Header;