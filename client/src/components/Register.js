import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = (props) => {
    const navigate = useNavigate();
    const [userReg, setUserReg] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:''
    })

    const onChangeHandler = (e) => {
        setUserReg({...userReg, [e.target.name]: e.target.value})
        
    }
// ! need onSubmithandler
const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/register', userReg, {withCredentials:true})
        .then((res) => {
            console.log('hello');
            console.log(res);
            navigate('/')
        })
        .catch((err) => {
            console.log(err);
        });
}; 

return (
    <div className='container-fluid'>
        <div>
            <div className='navbar-brand bg-success mx-3'>
                <div className='font-monospace text-decoration-underline display-5 '>NCDE</div>
            </div>
        </div>
        <div className='row'>
            <h1 className='display-1 text-center'>Register!</h1>
        </div>
        <div className='row'>
            <div className='col'></div>
            <div className='col'>
                <form onSubmit={submitHandler} className=''>
                    <label className='form-label'>First Name</label>
                    <input className='form-control' type="text" name='firstName' value={userReg.firstName} onChange={onChangeHandler} />

                    <label className='form-label'>Last Name</label>
                    <input className='form-control' type="text" name='lastName' value={userReg.lastName} onChange={onChangeHandler} />

                    <label className='form-label'>Email</label>
                    <input className='form-control' type="text" name='email' value={userReg.email} onChange={onChangeHandler} />

                    <label className='form-label'>Password</label>
                    <input className='form-control' type="password" name='password' value={userReg.password} onChange={onChangeHandler} />

                    <label className='form-label'>Confirm Password</label>
                    <input className='form-control' type="password" name='confirmPassword' value={userReg.confirmPassword} onChange={onChangeHandler} />
                    <br/>
                    <button className='btn btn-outline-success me-2'>Register</button>
                    <Link to={'/login'}>Already have an account? click here to login</Link>
                </form>
                </div>
            <div className='col'></div>
        </div>
        
    </div>
)
}

export default Register