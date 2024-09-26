import React from 'react'
import {Link, useNavigate} from 'react-router-dom';

const Header = () => {
  const auth= localStorage.getItem('user');
  const navigate= useNavigate();

  const logout= ()=>{
    localStorage.clear();
    navigate('/signup');
    //yahan kuch error hai 
    //logout button press krne me vo h1 tag show kr rha hai route wala 
    //pr navigate nhi kr rha signup page pe
  }

  return (
    <div>
        <ul className='header-ul'>
        <img className='logo' src='https://i.etsystatic.com/22360457/r/il/9e144b/2247216625/il_570xN.2247216625_o580.jpg' alt='logo' /> 
          {
            auth ? 
            <>
              <li><Link to="/">Products</Link></li>
              <li><Link to="/add">Add Product</Link></li>
              <li><Link to="/update">Update Product</Link></li>
              <li><Link to="/profile">Profile</Link></li>
              <li><Link onClick={logout}>LogOut ({JSON.parse(auth).name})</Link></li>
            </>
            :
            <>
              <li><Link to="/signup">SignUp</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          }
            
            
        </ul>
    </div>
  )
}

export default Header