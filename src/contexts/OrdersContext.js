import { createContext, useState, useEffect } from "react";
import { getOrders } from "../API/Orders";

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
    const [orders, setOrders] = useState([]);
  
    useEffect(() => {
        updateOrders();
      }, []);
    
      const updateOrders = async () => {
        try {
          const response = await getOrders();
          const data = await response.json();
          setOrders(data);
        } catch (error) {
          console.error(error);
        }
      };
  
    return (
      <OrdersContext.Provider value={{ orders, updateOrders }}>
        {children}
      </OrdersContext.Provider>
    );
  };

export default OrdersContext;