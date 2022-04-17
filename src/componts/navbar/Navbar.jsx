import React from 'react';
function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
            <div className="container" >
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/counter'>Counter</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/todo'>TODO</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='/form'>Form</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    );
}

export default Navbar
