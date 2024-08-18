import React from "react";



//create your first component
const Jumbotron = () => {
    return (
        <div className="jumbotron mt-5 bg-light p-2">
            <h1 className="display-4">A Warm Welcome!</h1>
            <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque egestas libero eu ipsum vehicula dictum. Nulla tristique, felis eget pharetra lobortis, diam orci sollicitudin justo, eget faucibus felis lorem vel.</p>
                <p className="lead">
                    <a className="btn btn-primary btn-lg" href="#" role="button">Call To Action!</a>
                </p>
        </div>
    );
};

export default Jumbotron;
