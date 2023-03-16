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

const result = event.map((event, index)=>{
    return (
        
            <tr key={index}> 
                <td>
                <Link to={`/${event._id}`}>{event.name} </Link>
                </td>
                <td>{event.date}</td>
                <td>
                    <Link to={"/edit/" + event._id}> Edit  </Link>
                    |
                    <button onClick={(e)=>{deleteEvent(event._id)}} className="adopt">  Delete</button>
                </td>
            </tr> 
        
    )});

    return (
    <div className='App'>
        <div className='navbar'>
            <Link to={"/events/new"} >Add Event</Link>
        </div>
        <div className='main'>
            <div className='subtitle'>
                <h1><span className='title'>NorCal Dance Events</span></h1>
                <h3>Local Street Dance Event Finder and Organizer</h3>
            </div>
            <div className='body'>
                <table>
                    <thead>
                        <tr>
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
        </div>    
    </div>
    );
}
export default EventList;