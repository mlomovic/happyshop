import React, { useState } from 'react'

const Admin = ({ items, setItems }) => {

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [qty, setQty] = useState(0);
    const [price, setPrice] = useState(0);
    const [img, setImg] = useState('');

    const [editMode, setEditMode] = useState({ mode: false, id: null })


    const addFormSubmit = (event) => {
        event.preventDefault();

        const newItem = {
            id: items[items.length - 1].id + 1,
            title: title,
            desc: desc,
            qty: qty,
            price: price,
            img: img
        };

        setItems(prev => {
            return [...prev, newItem];
        });
    }

    const editFormSubmit = (event) => {
        event.preventDefault();

        items.forEach((item, idx) => {
            if(idx == editMode.id){
                const tempItems = [...items];
                tempItems[idx].title = title;
                tempItems[idx].desc = desc;
                tempItems[idx].qty = qty;
                tempItems[idx].price = price;
                tempItems[idx].img = img;

                setItems([...tempItems]);
            }
        })

        setEditMode({ mode: false, id: null });
        setTitle('');
        setDesc('');
        setQty('');
        setPrice('');
        setImg('');

    }


    const setEdit = (idx) => {
        setEditMode({ mode: true, id: idx });

        setTitle(items[idx].title);
        setDesc(items[idx].desc);
        setQty(items[idx].qty);
        setPrice(items[idx].price);
        setImg(items[idx].img);

    }

    const cancelEdit = () => {
        setEditMode({ mode: false, id: null });
        setTitle('');
        setDesc('');
        setQty('');
        setPrice('');
        setImg('');
    }

    const removeItem = (idx) => {
        let tempItems = [...items];
        tempItems.splice(idx, 1);
        setItems(tempItems);
    }

    return (
        <>
            <section className="single py-5">
                <article className="container">
                    <div className="row align-items-center">
                        <div className="col-md-10 mx-auto">
                            {editMode.mode == false
                                ?
                                <form onSubmit={addFormSubmit}>
                                    <input value={title} onChange={(event) => setTitle(event.target.value)} className='m-2' type="text" placeholder="Title" />
                                    <input value={desc} onChange={(event) => setDesc(event.target.value)} className='m-2' type="text" placeholder="Description" />
                                    <input value={qty} onChange={(event) => setQty(event.target.value)} className='m-2' type="number" placeholder="Qty" />
                                    <input value={price} onChange={(event) => setPrice(event.target.value)} className='m-2' type="number" placeholder="Price" />
                                    <select value={img} onChange={(event) => setImg(event.target.value)} className='m-2'>
                                        <option value='img/product1.jpg'>Majca</option>
                                        <option value='img/product2.jpg'>Torba</option>
                                        <option value='img/product3.jpg'>Naocari</option>
                                        <option value='img/product4.jpg'>Sat</option>
                                        <option value='img/product5.jpg'>Sesir</option>
                                        <option value='img/product6.jpg'>Kaciga</option>
                                    </select>
                                    <input type='submit' value="Add" className='btn btn-outline-primary m-2' />
                                </form>
                                :
                                <>
                                    <form onSubmit={editFormSubmit}>
                                        <input value={title} onChange={(event) => setTitle(event.target.value)} className='m-2' type="text" placeholder="Title" />
                                        <input value={desc} onChange={(event) => setDesc(event.target.value)} className='m-2' type="text" placeholder="Description" />
                                        <input value={qty} onChange={(event) => setQty(event.target.value)} className='m-2' type="number" placeholder="Qty" />
                                        <input value={price} onChange={(event) => setPrice(event.target.value)} className='m-2' type="number" placeholder="Price" />
                                        <select value={img} onChange={(event) => setImg(event.target.value)} className='m-2'>
                                            <option value='img/product1.jpg'>Majca</option>
                                            <option value='img/product2.jpg'>Torba</option>
                                            <option value='img/product3.jpg'>Naocari</option>
                                            <option value='img/product4.jpg'>Sat</option>
                                            <option value='img/product5.jpg'>Sesir</option>
                                            <option value='img/product6.jpg'>Kaciga</option>
                                        </select>
                                        <input type='submit' value="Edit" className='btn btn-outline-warning m-2' />
                                    </form>
                                    <button className='btn btn-danger' onClick={() => cancelEdit()}>Cancel</button>
                                </>
                            }
                            <table className="table table-striped table-hover shadow-lg">
                                <thead>
                                    <tr>
                                        <th scope="col">Id</th>
                                        <th scope="col">Image</th>
                                        <th scope="col">Title</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Edit</th>
                                        <th scope="col">Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map((item, idx) => {
                                        return (
                                            <tr key={idx}>
                                                <th scope="row">{item.id}</th>
                                                <td><img src={item.img} height="30px" /></td>
                                                <td>{item.title}</td>
                                                <td>{item.desc}</td>
                                                <td>{item.qty}</td>
                                                <td>${item.price}</td>
                                                <td><button onClick={() => setEdit(idx)} className='btn btn-warning'>Edit</button></td>
                                                <td><button onClick={() => removeItem(idx)} className='btn btn-danger'>X</button></td>
                                            </tr>
                                        )
                                    })}
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

export default Admin