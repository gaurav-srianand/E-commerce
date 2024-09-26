import React, { useState } from 'react'

const AddProduct = () => {
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [price, setPrice] = useState("")
    const [category, setCategory] = useState("")

    const [error, setError]= useState(false);

    const addProduct= async ()=> {

        console.warn(name);
        if( !name || !brand || !price || !category){
            setError(true);
            return false;
        }

        
        const userId= JSON.parse(localStorage.getItem('user'))._id
        let result= await fetch('http://localhost:3200/add-product', {
            method: 'post',
            body: JSON.stringify({ name, brand, price, category,userId }),
            headers: {
                'Content-Type': 'application/json',
                authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`
            }
        });
        result= await result.json();
        console.warn(result);   
    }
  return (
    <div className='product'>
        <h1>Add Product</h1>
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
        
        <button className='appButton' onClick={addProduct}>Add Product</button>
    </div>
  )
}

export default AddProduct