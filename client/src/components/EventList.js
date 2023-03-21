import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const EventList = (props) => {
    const [event, setEvent] = useState([]);

    const removeFromDom = eventId => {
        setEvent(event.filter(event => event._id !== eventId)); //We could also write this in our eventList component
    }

    const deleteEvent = (eventId) => {
        
        axios.delete('http://localhost:8000/api/events/' + eventId)
            .then(res => {
                console.log(res)
                console.log(res.data)
                console.log('hello')
                removeFromDom(eventId)
                ;
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        axios.get("http://localhost:8000/api/events")
        .then((res)=>{
            console.log(res.data);
                setEvent(res.data);
        })
            .catch((err)=>{
                console.log(err);
            })
    }, []);

    const logout = () => {
        axios.post('http://localhost:8000/api/logout', {}, {withCredentials:true}) 
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.log(err);
        });
    }

const result = event.map((event, index)=>{
    return (
        
            <tr className='text-center' key={index}> 
                <td>
                <Link className='link-primary' to={`/${event._id}`}><h5>{event.name}</h5></Link>
                </td>
                <td>{event.date}</td>
                <td>
                    <Link className='link-success' to={"/edit/" + event._id}> Edit  </Link>
                    <>| </>
                    <button onClick={(e)=>{deleteEvent(event._id)}} className="btn btn-danger">Delete</button>
                </td>
            </tr> 
        
    )});

    return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='navbar d-flex justify-content-end'>
                <Link className='btn btn-outline-success mx-2' to={"/events/new"} ><h3>Add Event</h3></Link>
                <Link className='btn btn-sm btn-outline-secondary' to={"/register"} onClick={logout}><h3>Log Out</h3></Link>
            </div>
        </div>
        <div className='row'>
            <div className='font-monospace text-decoration-underline'>
                <div className='subtitle'>
                    <h1><span className='title'>NorCal Dance Events</span></h1>
                    <h3>Local Street Dance Event Finder and Organizer</h3>
                </div>
            </div>
        </div>
        <div className='row'>
                    <div className='col'></div>
                    <div className='col-6 table-responsive'>
                        <table className='table align-middle table-bordered border-dark table-hover table-striped'>
                            <thead>
                                <tr className='text-center'>
                                    <th>Name</th>
                                    <th>Date</th>
                                    <th>Edit/Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {result}
                            </tbody>
                            </table>
                    </div>
                    <div className='col'></div>
                </div>    
    </div>
    );
}
export default EventList;