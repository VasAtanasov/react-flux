import React from "react";
import { Link } from "react-router-dom";

const HomeComponent = () => (
    <div className="jumbotron">
        <h1>Plurasight Administration</h1>
        <p>React, Flux and React-Router for responsive web apps.</p>
        <Link to="about" className="btn btn-primary">
            About
        </Link>
    </div>
);

export default HomeComponent;
