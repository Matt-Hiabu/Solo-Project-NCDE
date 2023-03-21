import "./App.css";
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import Detail from './components/Detail';
import Update from './components/Update';
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard";

function App () {

    return(
        <div className='container-fluid bg-transparent'>
        <BrowserRouter>
            <Routes>
                <Route element={<Login/>} path="/login" default/>
                <Route element={<Register/>} path="/register"/>
                <Route element={<Dashboard/>} path="/dashboard"/>
                <Route element={<EventList />} path="/"/>
                <Route element={<EventForm />} path="/events/new" />
                <Route element={<Detail/>} path="/:id" /> 
                <Route element={<Update/>} path="/edit/:id"/>
                
            </Routes>
        </BrowserRouter>
        </div>
    ) 
}
export default App;
