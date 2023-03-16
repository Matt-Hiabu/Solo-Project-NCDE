import React, { useRef, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import {format} from 'date-fns'

const EventForm = (props) => {
    const [event, setEvent] = useState(""); 
    const [name, setName] = useState(""); 
    const [nameError, setNameError] = useState(""); 

    format(new Date(), 'dd/mm/yyyy')

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
                navigate("/")
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <div className='App'>
            <div className='navbar' >
                    <Link to={"/"} >Home</Link>
            </div>
            <div className='main'>
                <div className='subtitle'>
                    <h1><span className='title'>Add A New Event!</span></h1>
                </div>
                <div className='body'>
                    <form onSubmit={onSubmitHandler} className='eventForm'>
                        <div>
                            <p>
                                <label>Event Name:</label><br/>
                            {}
                                <input type="text" onChange= {handleName}/>
                                {
                                    nameError ?
                                    <p>{ nameError }</p> :
                                    ''
                                }
                            </p>
                            <p>
                                <label>Location:</label><br/>
                                <input type="text" onChange = {handleLocation}/>
                                {
                                    locationError ?
                                    <p>{ locationError }</p> :
                                    ''
                                }
                            </p>
                            <p>
                                <label>Date:</label><br/>
                                <input 
                                type="date" 
                                onChange = {(e)=>setDate(e.target.value)}
                                ref= {dateInputRef}
                                />
                            </p>
                            <p>
                                <label>Host:</label><br/>
                                <input type="text" onChange = {handleHost}/>
                                {
                                    hostError ?
                                    <p>{ hostError }</p> :
                                    ''
                                }
                            </p>
                            <input type="submit" value={"Add Event"} className='addEvent'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default EventForm;