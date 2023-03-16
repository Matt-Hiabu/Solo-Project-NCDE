import "./App.css";
import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import Detail from './components/Detail';
import Update from './components/Update';

function App () {

    return(
        <div className='App'>
        <BrowserRouter>
            <Routes>
                <Route element={<EventList />} path="/" default />
                <Route element={<EventForm />} path="/events/new" />
                <Route element={<Detail/>} path="/:id" /> 
                <Route element={<Update/>} path="/edit/:id"/>
            </Routes>
        </BrowserRouter>
        </div>
    ) 
}
export default App;
