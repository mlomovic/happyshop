import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from './components/NavBar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Single from './pages/Single';
import Admin from './pages/Admin';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';


const App = () => {
  return (
    <BrowserRouter>
      <div>

        <NavBar />

        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/single" element={<Single/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>


        <Footer />
      </div>

    </BrowserRouter>
  );
}

export default App;
