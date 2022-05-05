import React from 'react'

const Footer = () => {
    return (
        <footer class="py-5 bg-dark text-white">
        <div class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6">
                    <h4 class="mb-4">About</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem veniam a numquam aliquam itaque placeat!</p>
                </div>
                <div class="col-md-3 col-sm-6">
                    <h4 class="mb-4">Top products</h4>
                    <ul class="list-unstyled">
                        <li><a href="">Jeans</a></li>
                        <li><a href="">Bags</a></li>
                        <li><a href="">Accesories</a></li>
                        <li><a href="">Phones</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                    <h4 class="mb-4">Quick links</h4>
                    <ul class="list-unstyled">
                        <li><a href="">Home</a></li>
                        <li><a href="">Blog</a></li>
                        <li><a href="">Shop</a></li>
                        <li><a href="">Kontakt</a></li>
                    </ul>
                </div>
                <div class="col-md-3 col-sm-6">
                    <a href="index.html">
                        <img src="img/logo.png" alt="" class="img-fluid rounded rounded-3 shadow-lg border border-white border-5"/>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer