import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams, Link} from "react-router-dom";

const Detail = (props) => {

    const navigate = useNavigate();

    const [event, setEvent] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/events/" + id)
            .then( res => {
                console.log(res.data);
                setEvent(res.data);
            })
            .catch( err => console.log(err) );
    }, [id]);

    const deleteEvent = (personId) => {
        
        axios.delete('http://localhost:8000/api/events/' + personId)
            .then(res => {
                console.log(res)
                console.log(res.data)
                navigate("/");
            })
            .catch(err => console.log(err))
    };

    
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
                    <h1><span className='title'>Event Details</span></h1>
                    <h3>Details about: {event.name} </h3>
                </div>
            </div>
            <div className='row'>
                <div className='col'></div>
                <div className='col'>
                    <div className='bodyForm'>
                        <div className='fw-bold'>
                            <p>Event Location: </p>
                            <p>Date: </p>
                            <p>Host:</p>
                            
                        </div>
                        <div>
                            <p>{event.location}</p>
                            <p>{event.date}</p>
                            <p>{event.host}</p>
                        </div>
                    </div>
                    <div className='likes'>
                        <button onClick={(e)=>{deleteEvent(event._id)}} className="btn btn-danger"> Delete {event.name}</button>
                    </div>
                </div>
                <div className='col'></div>
            </div>
        </div>
    );
}
export default Detail;