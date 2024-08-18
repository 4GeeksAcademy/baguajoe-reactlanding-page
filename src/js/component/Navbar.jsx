import React from "react";

const Navbar = () => {
    return (
     
        <nav className=" px-5 navbar navbar-expand-lg bg-dark navbar-dark" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Start bootstrap</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        <a className="nav-link" href="#">About</a>
                        <a className="nav-link" href="#">Services</a>
                        <a className="nav-link" href="#">Contacts</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar