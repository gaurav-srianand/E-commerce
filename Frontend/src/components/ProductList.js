import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ProductList = () => {
    const [products, setProducts] = useState([])

    const getProducts= async ()=> {
        let result= await fetch('http://localhost:3200/products', {
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result= await result.json()
        console.warn(result);
        setProducts(result);

    }
    
    useEffect(() => {
        getProducts();
    },[])

    const deleteProduct= async (id)=> {
        let result= await fetch(`http://localhost:3200/product/${id}`, {
            method: 'Delete',
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result= result.json();
        if(result) {
            alert("Record is Deleted");
            getProducts();
        }
    }
    
    const searchHandle= async (event)=> {
        let key= event.target.value;
        if(key) {
            let result= await fetch(`http://localhost:3200/search/${key}`, {
                headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
            });
            result= await result.json();
            if(result){
                setProducts(result)
            }
        }
        else{
            getProducts();
        }
        
    }

  return (
    <div className='product-list'>
        <h1>Product List</h1>
        <input className='searchBar' type='text' placeholder='Search Product' onChange={searchHandle} />
        <ul>
            <li>S.No</li>
            <li>Name</li>
            <li>Brand</li>
            <li>Price</li>
            <li>Category</li>
            <li>Operation</li>
        </ul>
        {
            products.length > 0 ? products.map((item, index)=> 
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.brand}</li>
                <li>₹{item.price}</li>
                <li>{item.category}</li>
                <li>
                    <button onClick={()=>deleteProduct(item._id)}>Delete</button>
                    <Link to={"/update/"+item._id}>Update</Link>
                </li>
            </ul>
            )
            : <h2>No Result Found</h2>
        }
    </div>
  )
}

export default ProductList