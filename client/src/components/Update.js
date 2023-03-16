import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const Update = (props) => {
    const { id } = useParams();  
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
            setLocationError("Location must be at least 3 characters");
        } else {
            setLocationError("");
        }
    }


    const [date, setDate] = useState("");
    const [dateError, setDateError] = useState("");

    const handleDate = (e) => {
        setDate(e.target.value);
        if(e.target.value.length < 3) {
            setDateError("Date must be at least 3 characters");
        } else {
            setDateError("");
        }
    }
    const [host, setHost] = useState("");
    const [hostError, setHostError] = useState("");

    const handleHost = (e) => {
        setHost(e.target.value);
        if(e.target.value.length < 3) {
            setHostError("Date must be at least 3 characters");
        } else {
            setHostError("");
        }
    }

    const navigate = useNavigate();
    // retrieve the current values for this person so we can fill
    // in the form with what is in the db currently
    useEffect(() => {
        axios.get('http://localhost:8000/api/events/' + id)
            .then(res => {
                setName(res.data.name);
                setLocation(res.data.location);
                setDate(res.data.date);
                setHost(res.data.host);
            })
            .catch(err => console.log(err))
    }, [id])
    const updateEvent = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/events/' + id, {
            name,    
            location,      
            date,
            host,
        })
            .then(res => {
                console.log(res);
                navigate("/"); // this will take us back to the home
            })
            .catch(err => console.log(err))
    }
    return (
        <div className='App'>
            <div className='navbar'>
                <Link to={"/"} >Home</Link>
                
            </div>
            <div className='subtitle'>
                <h1><span className='title'>Edit {name} Event</span></h1>
            </div>
            
            <div className='body'>
                <form onSubmit={updateEvent} className='EventForm'>
                    <div>
                        <p>
                            <label>Event Name:</label><br/>
                        {}
                            <input type="text" 
                            name="name" 
                            value={name}
                            onChange = {handleName}/>
                            {
                                nameError ?
                                <p>{ nameError }</p> :
                                ''
                            }
                        </p>
                        <p>
                            <label>Event location:</label><br/>
                            <input type="text" 
                            name="location" 
                            value={location}
                            onChange = {handleLocation}/>
                            {
                                locationError ?
                                <p>{ locationError }</p> :
                                ''
                            }
                        </p>
                        <p>
                            <label>Event Date:</label><br/>
                            <input type="date" 
                            name="date" 
                            value={date}
                            onChange = {handleDate}/>
                            {
                                dateError ?
                                <p>{ dateError }</p> :
                                ''
                            }
                        </p>
                        <p>
                            <label>Host:</label><br/>
                            <input type="text" 
                            name="host" 
                            value={host}
                            onChange = {handleHost}/>
                            {
                                hostError ?
                                <p>{ hostError }</p> :
                                ''
                            }
                        </p>
                        <input type="submit" value={"Save Changes"} className='addEvent'/>
                    </div>
                    <div>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Update;