import React from 'react'

const Single = () => {
    return (
        <>
            {/* <!-- shop heading --> */}
            <section class="shopHeading text-center bg-light py-5">
                <h2 class="fw-bolder">Single product page</h2>
                <p class="fw-lighter">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </section>


            {/* <!-- single --> */}
            <section class="single py-5">
                <article class="container">
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img src="img/product3.jpg" class="img-fluid shadow-lg border border-text rounded-3" alt="..." />
                        </div>
                        <div class="col-md-6">
                            <div class="price d-flex justify-content-between">
                                <h5 class="card-title">Sunglasses</h5>
                                <h5>110$</h5>
                            </div>
                            <select class="form-select bg-light d-flex" aria-label="Default select example">
                                <option selected>Quantity</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>
                            <hr />
                            <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam, id. Similique suscipit ea atque illo quia magni unde. Qui, sint!</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat nam sequi provident nihil omnis distinctio laudantium ut, tempora quidem deleniti?</p>
                            <hr />
                            <a href="cart.html" class="button">Add to cart</a>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Single