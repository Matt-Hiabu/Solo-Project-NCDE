import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const EventForm = (props) => {
    const [event, setEvent] = useState(""); 
    const [name, setName] = useState(""); 
    const [nameError, setNameError] = useState(""); 


    const handleName = (e) => {
        setName(e.target.value);
        if(e.target.value.length < 3) {
            setNameError("Name must be at least 3 characters");
        } else {
            setNameError("");
        }
    }

    const [location, setLocation] = useState("");
    const [locationError, setLocationError] = useState("");

    const handleLocation = (e) => {
        setLocation(e.target.value);
        if(e.target.value.length < 3) {
            setLocationError("Type must be at least 3 characters");
        } else {
            setLocationError("");
        }
    }

    const [date, setDate] = useState("");
    const dateInputRef = useRef(null);

    const [host, setHost] = useState("");
    const [hostError, setHostError] = useState("");

    const handleHost = (e) => {
        setHost(e.target.value);
        if(e.target.value.length < 3) {
            setHostError("host must be at least 3 characters");
        } else {
            setHostError("");
        }
    }

    const navigate = useNavigate();
    
    const onSubmitHandler = (e) => {
        
        e.preventDefault();
    
        axios.post('http://localhost:8000/api/events', {
            name,
            location,
            date,
            host,
        })
            .then(res=>{
                console.log(res);
                console.log(res.data);
                setEvent([...event, res.data]);
                navigate('/')
            })
            
            .catch(err=>{
                console.log(err)
            });
        }
    
    return (
        <div>
            <nav className="navbar bg-dark bg-gradient">
                <div className='NCDE'>NCDE</div>
                <div className='navright'>
                    <Link className='btn btn-success' to={"/"} ><h3>Home</h3></Link>
                </div>
            </nav>
            <div className='row'>
                <div className='subtitle'>
                    <h1><span className='title'>Add A New Event!</span></h1>
                </div>
            </div>
            <div>
                <div className='row'>
                    <div className='col'></div>
                    <form className='col' onSubmit={onSubmitHandler} >
                        <div >
                                <label className='form-label'>Event Name:</label>
                                <input className='form-control' type="text" onChange= {handleName}/>
                                {
                                    nameError ?
                                    <p>{ nameError }</p> :
                                    ''
                                }

                                <label className='form-label'>Location:</label>
                                <input className='form-control' type="text" onChange = {handleLocation}/>
                                {
                                    locationError ?
                                    <p>{ locationError }</p> :
                                    ''
                                }

                                <label className='form-label'>Date:</label>
                                <input
                                    className='form-control' 
                                    type="date" 
                                    onChange = {(e)=>setDate(e.target.value)}
                                    ref= {dateInputRef} // 2023 -03-02
                                />


                                <label className='form-label'>Host:</label>
                                <input className='form-control' type="text" onChange = {handleHost}/>
                                {
                                    hostError ?
                                    <p>{ hostError }</p> :
                                    ''
                                }
                                <br/>
                            <input className='btn btn-primary'  type="submit" value={"Add Event"}/>
                        </div>
                    </form>
                    <div className='col'></div>
                </div>
            </div>
        </div>
    )
}
export default EventForm;