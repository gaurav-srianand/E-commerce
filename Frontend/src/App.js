import './App.css';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header/>
      <Routes>

        <Route element={<PrivateComponent/>}>
        <Route path='/' element={<ProductList />} />
        <Route path='/add' element={<AddProduct />} />
        <Route path='/update/:id' element={< UpdateProduct/>} />
        <Route path='/logout' element={<h1>LogOut Component</h1>} />
        <Route path='/profile' element={<h1>Profile Component</h1>} />
        </Route>
        
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
