import React, { useState } from 'react';
import '../App.css';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [formData, setFormData] = useState({ userName: '', password: '' });
    const navigate = useNavigate();
    const [role,setRole]=useState('admin');
    const handleSubmit = (e) => {
        e.preventDefault();
        const { userName, password } = formData;
        console.log(userName, password);
        if (userName === 'admin' && password === 'admin' && role==='admin') {
            navigate('/home');
        }
        else if(userName==='user' && password==='user' && role==='user'){
            navigate('/user');
        } 
        else {
            alert("Invalid Credentials");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    return (
        <div className='body'>
            <div className='main-div'>
                <h1 className='heading'>Login</h1>
                <hr />
                <form className='form' onSubmit={handleSubmit}>
                    <input
                        type='text'
                        placeholder='Username'
                        className='input'
                        name='userName'
                        value={formData.userName}
                        onChange={handleChange}
                    />
                    <br />
                    <input
                        type='password'
                        placeholder='Password'
                        className='input'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    <br />
                    <br/>
                    <select value={role} onChange={e=>{setRole(e.target.value)}}>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                    </select>
                    <br/>
                    <button className='button' type='submit'>Login</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
