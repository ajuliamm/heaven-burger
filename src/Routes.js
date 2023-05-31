import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/signIn/Login'
import Register from './pages/signIn/Register';
import HomeScreen from './pages/signIn/HomeScreen';
import HomeWaiter from './pages/waiter/HomeWaiter/HomeWaiter';
import NewOrder from './pages/waiter/NewOrder/NewOrder';
import BackOrders from './pages/BackOrders/BackOrders';
import FinishedOrders from './pages/FinishedOrders/FinishedOrders';
// import { OrderProvider } from './contexts/OrderContext';

export default function MyRoutes(){
    return (
        // <OrderProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<HomeScreen/>}/> 
                    <Route path='/Login' element={<Login/>}/>
                    <Route path='/Register' element={<Register/>}/>
                    <Route path='/HomeWaiter' element={<HomeWaiter/>}/>
                    <Route path='/NewOrder' element={<NewOrder/>}/>
                    <Route path='/BackOrders' element={<BackOrders/>}/>
                    <Route path='/FinishedOrders' element={<FinishedOrders/>}/>
                </Routes>
            </Router>
        // </OrderProvider>
    );
}