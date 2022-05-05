import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {

    return(

       
    <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <div class="container">
            <a class="navbar-brand" href="index.html">
                <img src="img/logo.png" alt=""/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Single">Single</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Admin">Admin</Link>
                    </li>
                    <li class="nav-item">
                        <Link class="nav-link" to="/Cart">Cart</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
       
    )
}

export default NavBar;