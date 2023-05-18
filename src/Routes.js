import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/signIn/Login'
import Register from './pages/signIn/Register';
import HomeScreen from './pages/signIn/HomeScreen';
import HomeWaiter from './pages/waiter/HomeWaiter';
import NewOrder from './pages/waiter/NewOrder';

export default function MyRoutes(){
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomeScreen/>}/> 
                <Route path='/Login' element={<Login/>}/>
                <Route path='/Register' element={<Register/>}/>
                <Route path='/HomeWaiter' element={<HomeWaiter/>}/>
                <Route path='/NewOrder' element={<NewOrder/>}/>
            </Routes>
        </Router>
    );
}