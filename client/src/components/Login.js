import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = (props) => {
    const navigate = useNavigate();
    const [userLogin, setUserLogin] = useState({
        email:'',
        password:''
    })

    const [userLoginError, setUserLoginError] = useState('')

    const onChangeHandler = (e) => {
        setUserLogin({...userLogin, [e.target.name]: e.target.value})
        if(e.target.value.length < 1) {
            setUserLoginError('This field is required.');
        } else {
            setUserLoginError("");
        }
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
        <nav className="navbar bg-dark bg-gradient">
            <div className='NCDE'>NCDE</div>
        </nav>
        <div className='row'>
            <div className='mainHeading'>
                <div className='subtitle'>
                    <h1><span className='title'>Login!</span></h1>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col'></div>
            <div className='col'>
                <form onSubmit={submitHandler}>
                <label className='form-label'>Email</label>
                    <input className='form-control' type="text" name='email' value={userLogin.email} onChange={onChangeHandler} />
                    {
                        userLoginError ?
                        <p>{ userLoginError }</p> :
                        ''
                    }

                    <label className='form-label'>Password</label>
                    <input className='form-control' type="password" name='password' value={userLogin.password} onChange={onChangeHandler} />
                    {
                        userLoginError ?
                        <p>{ userLoginError }</p> :
                        ''
                    }
                    <br/>
                <button className='btn btn-success me-2'>Login</button>
                    <Link to={'/register'}>Don't have an account? click here to register</Link>
                </form>
            </div>
            <div className='col'></div>
        </div>
    </div>
)
}

export default Login