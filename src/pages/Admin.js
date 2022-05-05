import React from 'react'

const Admin = () => {
    return (
        <>
            <section class="single py-5">
                <article class="container">
                    <div class="row align-items-center">
                        <div class="col-md-10 mx-auto">
                            <table class="table table-striped table-hover shadow-lg">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Quantity</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Orange t-shirt</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Traveller bag</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Sunglasss</td>
                                        <td>1</td>
                                    </tr>
                                </tbody>
                            </table>
                            <a href="" class="button mt-4">Payment process</a>
                        </div>
                    </div>
                </article>
            </section>
        </>
    )
}

export default Admin