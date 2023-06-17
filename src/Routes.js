import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/signIn/Login'
import Register from './pages/signIn/Register';
import HomeScreen from './pages/signIn/HomeScreen';
import HomeWaiter from './pages/waiter/HomeWaiter/HomeWaiter';
import NewOrder from './pages/waiter/NewOrder/NewOrder';
import BackOrders from './pages/BackOrders/BackOrders';
import FinishedOrders from './pages/FinishedOrders/FinishedOrders';
import HomeChef from './pages/chef/HomeChef/HomeChef';
import Add from './pages/adm/Add/Add';
import AddProducts from './pages/adm/AddProducts/AddProducts';
import HomeAdm from './pages/adm/HomeAdm/HomeAdm';
import Products from './pages/adm/Products/Products';
import Collaborators from './pages/adm/Collaborators/Collaborators';
import Devs from './pages/devs/Devs'
import { UserProvider } from './contexts/UserContext';
import { OrdersProvider } from './contexts/OrdersContext';


export default function MyRoutes() {
    return (
        <UserProvider>

            <Router>
                <Routes>
                    <Route path='/' element={<HomeScreen />} />
                    <Route path='/Login' element={<Login />} />
                    <Route path='/Register' element={<Register />} />
                    <Route path='/HomeWaiter' element={<OrdersProvider><HomeWaiter /></OrdersProvider>} />
                    <Route path='HomeChef' element={<OrdersProvider><HomeChef /></OrdersProvider>} />
                    <Route path='HomeAdm' element={<OrdersProvider><HomeAdm /></OrdersProvider>} />
                    <Route path='/NewOrder' element={<OrdersProvider><NewOrder /></OrdersProvider>} />
                    <Route path='/BackOrders' element={<OrdersProvider><BackOrders /></OrdersProvider>} />
                    <Route path='/FinishedOrders' element={<OrdersProvider><FinishedOrders /></OrdersProvider>} />
                    <Route path='/Add' element={<Add />} />
                    <Route path='/AddProducts' element={<AddProducts />} />
                    <Route path='/Products' element={<Products />} />
                    <Route path='/Collaborators' element={<Collaborators />} />
                    <Route path='/Devs' element={<Devs />} />
                </Routes>
            </Router>

        </UserProvider>
    );
}