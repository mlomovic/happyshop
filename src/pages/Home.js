import React from 'react'

const Home = () => {
    return (
        <>
            <div id="carouselExampleCaptions" class="carousel slide carousel-fade" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        </div>
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="img/slide_1.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block text-end">
                    <p class="lead">Woman collection</p>
                    <h2 class="display-4 fw-bold">Show <span>your <br/> personal</span> style</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Similique, ab.</p>
                    <a href="" class="button">View Collection</a>
                </div>
            </div>
            <div class="carousel-item">
                <img src="img/slide_2.jpg" class="d-block w-100" alt="..."/>
                <div class="carousel-caption d-none d-md-block text-start">
                    <p class="lead">Man collection</p>
                    <h2 class="display-4 fw-bold">Show <span>your <br/> personal</span> style</h2>
                    <p>Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Similique, ab.</p>
                    <a href="" class="button">View Collection</a>
                </div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
    </div>

    {/* <!-- featured products --> */}
    <section class="products py-5">
        <article class="container">
            <div class="row">
                <div class="col-md-4 col-sm-6">
                    <div class="card">
                        <a href="single.html" class="holder">
                            <img src="img/product1.jpg" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body p-4">
                            <div class="price d-flex justify-content-between">
                                <h5 class="card-title">Orange t-shirt</h5>
                                <h5>39$</h5>
                            </div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="single.html" class="button">Shop now</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="card">
                        <a href="single.html" class="holder">
                            <img src="img/product2.jpg" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body p-4">
                            <div class="price d-flex justify-content-between">
                                <h5 class="card-title">Traveller bag</h5>
                                <h5>80$</h5>
                            </div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="single.html" class="button">Shop now</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="card">
                        <a href="single.html" class="holder">
                            <img src="img/product3.jpg" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body p-4">
                            <div class="price d-flex justify-content-between">
                                <h5 class="card-title">Sunglasses</h5>
                                <h5>30$</h5>
                            </div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="single.html" class="button">Shop now</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="card">
                        <a href="single.html" class="holder">
                            <img src="img/product4.jpg" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body p-4">
                            <div class="price d-flex justify-content-between">
                                <h5 class="card-title">Woman watch</h5>
                                <h5>120$</h5>
                            </div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="single.html" class="button">Shop now</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="card">
                        <a href="single.html" class="holder">
                            <img src="img/product5.jpg" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body p-4">
                            <div class="price d-flex justify-content-between">
                                <h5 class="card-title">Summer hat</h5>
                                <h5>30$</h5>
                            </div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="single.html" class="button">Shop now</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4 col-sm-6">
                    <div class="card">
                        <a href="single.html" class="holder">
                            <img src="img/product6.jpg" class="card-img-top" alt="..."/>
                        </a>
                        <div class="card-body p-4">
                            <div class="price d-flex justify-content-between">
                                <h5 class="card-title">Roller skates</h5>
                                <h5>180$</h5>
                            </div>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="single.html" class="button">Shop now</a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    </section>

    {/* <!-- about --> */}
    <section class="about py-5 bg-light">
        <article class="container">
            <div class="row">
                <div class="col-md-3 col-sm-6 text-center">
                    <div class="p-4 border border-dark rounded shadow-lg">
                        <i class="fa-solid fa-hand-holding-dollar"></i>
                        <h5 class="fw-bolder my-2">Money back guarantee</h5>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 text-center">
                    <div class="p-4 border border-dark rounded shadow-lg">
                        <i class="fa-solid fa-truck"></i>
                        <h5 class="fw-bolder my-2">Free delivery</h5>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 text-center">
                    <div class="p-4 border border-dark rounded shadow-lg">
                        <i class="fa-solid fa-headset"></i>
                        <h5 class="fw-bolder my-2">Always support</h5>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
                <div class="col-md-3 col-sm-6 text-center">
                    <div class="p-4 border border-dark rounded shadow-lg">
                        <i class="fa-solid fa-credit-card"></i>
                        <h5 class="fw-bolder my-2">Secure payments</h5>
                        <p>Lorem ipsum dolor sit.</p>
                    </div>
                </div>
            </div>
        </article>
    </section>

    {/* <!-- discover off --> */}
    <section class="discoverOff d-flex align-items-center">
        <article class="container text-end">
            <p class="lead">Woman Collection</p>
            <h2 class="display-2 fw-bolder">50% OFF</h2>
            <a href="" class="button mb-4">discover now</a>
            <p>Limited time offer</p>
        </article>
    </section>

        </>
    )
}

export default Home