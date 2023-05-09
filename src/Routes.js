import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './signIn/Login'
import Register from './signIn/Register';
import HomeScreen from './signIn/HomeScreen';
import HomeWaiter from './waiter/HomeWaiter';

export default function MyRoutes(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomeScreen/>}/> 
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/HomeWaiter' element={<HomeWaiter/>}/>
                
            </Routes>
        </Router>
    );
}