import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Single from './pages/Single';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';


const App = () => {

  const [items, setItems] = useState(
    [
      {
        id: 1,
        title: 'Orange t-shirt',
        price: 39,
        desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        qty: 4,
        img: 'img/product1.jpg'
      },
      {
        id: 2,
        title: 'Traveller bag',
        price: 80,
        desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        qty: 8,
        img: 'img/product2.jpg'
      },
      {
        id: 3,
        title: 'Sunglasses',
        price: 30,
        desc: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.',
        qty: 5,
        img: 'img/product3.jpg'
      }
    ]);

    const [cart, setCart] = useState([]);

  return (

    <BrowserRouter>
      <div>

        <NavBar cart={cart}/>

        <Routes>
          <Route path="/" element={<Home items={items} cart={cart} setCart={setCart}/>} />
          <Route path="/single" element={<Single items={items} cart={cart} setCart={setCart}/>} >
              <Route path=":singleId" element={<Single />} />
          </Route>
          <Route path="/admin" element={<Admin items={items} setItems={setItems}/>} />
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>


        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
