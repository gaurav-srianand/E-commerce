import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const UpdateProduct = () => {
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")
    
    const params= useParams();
    const navigate= useNavigate();

    useEffect(()=> {
        getProductDetails();
    },[])

    const getProductDetails= async ()=> {
        let result= await fetch(`http://localhost:3200/product/${params.id}`,{
            headers: {
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result= await result.json();
        setName(result.name)
        setBrand(result.brand)
        setPrice(result.price)
        setCategory(result.category)
    }


    const [error, setError]= useState(false);

    const updateProduct= async ()=> {
        console.log({name, brand, price, category})
        let result= await fetch(`http://localhost:3200/product/${params.id}`, {
            method: 'Put',
            body: JSON.stringify({name, brand, price, category}),
            headers: {
                'Content-Type': "application/json",
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result= await result.json();
        alert("Record Updated Succesfull");
        navigate('/');
        
    }
  return (
    <div className='product'>
        <h1>Update Product</h1>
        <input 
            className='inputBox'
            type='text'
            placeholder='Enter Product Name'
            value={name} 
            onChange={(e) => setName(e.target.value)} 
        />
        { error && !name && <span className='invalid-input'>Enter Valid Name</span>}
        
        <input 
            className='inputBox'
            type='text'
            placeholder='Enter Product Brand'
            value={brand} 
            onChange={(e) => setBrand(e.target.value)} 
        />
        { error && !brand && <span className='invalid-input'>Enter Valid Brand</span>}

        <input 
            className='inputBox'
            type='text'
            placeholder='Enter Product Price'
            value={price} 
            onChange={(e) => setPrice(e.target.value)} 
        />
        { error && !price && <span className='invalid-input'>Enter Valid Price</span>}

        <input 
            className='inputBox'
            type='text'
            placeholder='Enter Product Category'
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
        />
        { error && !category && <span className='invalid-input'>Enter Valid Category</span>}
        
        <button className='appButton' onClick={updateProduct}>Update Product</button>
        
    </div>
  )
}

export default UpdateProduct