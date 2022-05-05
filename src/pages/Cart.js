import React from 'react'

const Cart = ({ cart, setCart }) => {

    const removeFromCart = (idx) => {
        let tempCart = [...cart];
        tempCart.splice(idx, 1);
        setCart(tempCart);
    }

    return (
        <>
            <section className="single py-5">
                <article className="container">
                    <div className="row align-items-center">
                        <div className="col-md-10 mx-auto">
                            <table className="table table-striped table-hover shadow-lg">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.map((item, idx) => {
                                        return (
                                            <tr key={idx}>
                                                <th scope="row">{item.id}</th>
                                                <td><img src={item.img} height="30px" /></td>
                                                <td>{item.title}</td>
                                                <td>{item.desc}</td>
                                                <td>{item.qty}</td>
                                                <td>${item.price}</td>
                                                <td><button onClick={() => removeFromCart(idx)} className='btn btn-danger'>X</button></td>
                                            </tr>
                                        )
                                    })}
                                    {/* <tr>
                                        <th scope="row">1</th>
                                        <td><img src="img/product1.jpg" height="30px"/></td>
                                        <td>Orange t-shirt</td>
                                        <td>Neki Opis</td>
                                        <td>1</td>
                                        <td>$39</td>
                                        <td><button className='btn btn-danger'>X</button></td>
                                    </tr> */}
                                    <tr>
                                        <th scope="row"></th>
                                        <td><button className="btn btn-danger" onClick={() => {setCart([])}}>ClearCart</button></td>
                                        <td></td>
                                        <td></td>
                                        <td>Total:</td>
                                        <td>${cart.reduce((acc, cur) => { return acc + cur.price * cur.qty }, 0)}</td>
                                    </tr>
                                    {/* <tr>
                                        <th scope="row">2</th>
                                        <td>Traveller bag</td>
                                        <td>1</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Sunglasss</td>
                                        <td>1</td>
                                    </tr> */}
                                </tbody>
                            </table>
                            <a href="" className="button mt-4">Payment process</a>
                        </div>
                    </div>
                </article>
            </section>

        </>
    )
}

export default Cart