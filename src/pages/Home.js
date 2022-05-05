import React from 'react';
import {Link} from 'react-router-dom';

const Home = ({ items, cart, setCart}) => {

    const addToCart = (idx) => {
        let newCartItem = {
            id: items[idx].id,
            title: items[idx].title,
            price: items[idx].price,
            desc: items[idx].desc,
            qty: 1,
            img: items[idx].img
        };
        // let tmp = [...cart];
        // setCart([...tmp, newCartItem]);
        setCart((prev) => {
            return [...prev, newCartItem];
        })
    }

    return (
        <>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/slide_1.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-end">
                            <p className="lead">Woman collection</p>
                            <h2 className="display-4 fw-bold">Show <span>your <br /> personal</span> style</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Similique, ab.</p>
                            <a href="" className="button">View Collection</a>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/slide_2.jpg" className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block text-start">
                            <p className="lead">Man collection</p>
                            <h2 className="display-4 fw-bold">Show <span>your <br /> personal</span> style</h2>
                            <p>Lorem ipsum, dolor sit amet consectetur <br /> adipisicing elit. Similique, ab.</p>
                            <a href="" className="button">View Collection</a>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            {/* <!-- featured products --> */}
            <section className="products py-5">
                <article className="container">
                    <div className="row">
                        {items.map((item, idx) => {
                            return (
                                <div key={idx} className="col-md-4 col-sm-6">
                                    <div className="card">
                                        <Link to={`/single/${idx}`} className="holder">
                                            <img src={item.img} className="card-img-top" alt="..." />
                                        </Link>
                                        <div className="card-body p-4">
                                            <div className="price d-flex justify-content-between">
                                                <h5 className="card-title">{item.title}</h5>
                                                <h5>${item.price}</h5>
                                            </div>
                                            <p className="card-text">{item.desc}</p>
                                            <Link onClick={() => addToCart(idx)} className="button" to="/cart">Shop now</Link>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                        {/* <div className="col-md-4 col-sm-6">
                    <div className="card">
                        <a href="single.html" className="holder">
                            <img src="img/product1.jpg" className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body p-4">
                            <div className="price d-flex justify-content-between">
                                <h5 className="card-title">Orange t-shirt</h5>
                                <h5>39$</h5>
                            </div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="single.html" className="button">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="card">
                        <a href="single.html" className="holder">
                            <img src="img/product2.jpg" className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body p-4">
                            <div className="price d-flex justify-content-between">
                                <h5 className="card-title">Traveller bag</h5>
                                <h5>80$</h5>
                            </div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="single.html" className="button">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="card">
                        <a href="single.html" className="holder">
                            <img src="img/product3.jpg" className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body p-4">
                            <div className="price d-flex justify-content-between">
                                <h5 className="card-title">Sunglasses</h5>
                                <h5>30$</h5>
                            </div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="single.html" className="button">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="card">
                        <a href="single.html" className="holder">
                            <img src="img/product4.jpg" className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body p-4">
                            <div className="price d-flex justify-content-between">
                                <h5 className="card-title">Woman watch</h5>
                                <h5>120$</h5>
                            </div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="single.html" className="button">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="card">
                        <a href="single.html" className="holder">
                            <img src="img/product5.jpg" className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body p-4">
                            <div className="price d-flex justify-content-between">
                                <h5 className="card-title">Summer hat</h5>
                                <h5>30$</h5>
                            </div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="single.html" className="button">Shop now</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-6">
                    <div className="card">
                        <a href="single.html" className="holder">
                            <img src="img/product6.jpg" className="card-img-top" alt="..."/>
                        </a>
                        <div className="card-body p-4">
                            <div className="price d-flex justify-content-between">
                                <h5 className="card-title">Roller skates</h5>
                                <h5>180$</h5>
                            </div>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="single.html" className="button">Shop now</a>
                        </div>
                    </div>
                </div> */}
                    </div>
                </article>
            </section>

            {/* <!-- about --> */}
            <section className="about py-5 bg-light">
                <article className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="p-4 border border-dark rounded shadow-lg">
                                <i className="fa-solid fa-hand-holding-dollar"></i>
                                <h5 className="fw-bolder my-2">Money back guarantee</h5>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="p-4 border border-dark rounded shadow-lg">
                                <i className="fa-solid fa-truck"></i>
                                <h5 className="fw-bolder my-2">Free delivery</h5>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="p-4 border border-dark rounded shadow-lg">
                                <i className="fa-solid fa-headset"></i>
                                <h5 className="fw-bolder my-2">Always support</h5>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6 text-center">
                            <div className="p-4 border border-dark rounded shadow-lg">
                                <i className="fa-solid fa-credit-card"></i>
                                <h5 className="fw-bolder my-2">Secure payments</h5>
                                <p>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                    </div>
                </article>
            </section>

            {/* <!-- discover off --> */}
            <section className="discoverOff d-flex align-items-center">
                <article className="container text-end">
                    <p className="lead">Woman Collection</p>
                    <h2 className="display-2 fw-bolder">50% OFF</h2>
                    <a href="" className="button mb-4">discover now</a>
                    <p>Limited time offer</p>
                </article>
            </section>

        </>
    )
}

export default Home