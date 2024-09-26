import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate= useNavigate();

    useEffect(()=> {
        const auth= localStorage.getItem('user');
        if(auth) {
            navigate('/')
        }
    }, [])

    const handleLogin= async ()=> {
        let result= await fetch('http://localhost:3200/login', {
            method: 'post',
            body: JSON.stringify({ email, password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result= await result.json();
        console.warn(result);
        if(result.auth){
            localStorage.setItem("user", JSON.stringify(result.user));
            localStorage.setItem("token", JSON.stringify(result.auth));
            navigate('/');
        }
        else{
            alert("Please Enter Correct details");
        }
    }
  return (
    <div className='login'> 
        <h1>Login</h1>
        <input 
            className='inputBox'   
            type='email' 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder='Enter Email' 
        />
        <input 
            className='inputBox' 
            type='password' 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='Enter Password' 
        />
        <button className='appButton' onClick={handleLogin} type='button' >Login</button>
    </div>
  )
}

export default Login