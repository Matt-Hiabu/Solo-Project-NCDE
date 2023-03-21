import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })

    const onChangeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
    }

    // ! onSubmitHandler
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/login', userLogin, {withCredentials:true})
        .then((res) => {
            console.log('hey');
            console.log(res);
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
        });
    }
return (
    <div>
        <h1>Login!</h1>
        <form onSubmit={submitHandler}>
        <label className='form-label'>Email</label>
            <input className='form-control' type="text" name='email' value={userLogin.email} onChange={onChangeHandler} />

            <label className='form-label'>Password</label>
            <input className='form-control' type="password" name='password' value={userLogin.password} onChange={onChangeHandler} />
        <button>Login</button>
            <Link to={'/register'}>Don't have an account? click here to register</Link>
        </form>
        
    </div>
)
}

export default Login