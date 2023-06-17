import { createContext, useState, useEffect } from "react";
import { getOrders } from "../API/Orders";

const OrdersContext = createContext();

export const OrdersProvider = ({ children }) => {
    const [orders, setOrders] = useState([]); // Inicialize como um array vazio
  
    // const addOrders = (arrOrders) => {
    //   setAllOrders(arrOrders);
    // };
    useEffect(() => {
        fetchOrders();
      }, []);
    
      const fetchOrders = async () => {
        try {
          const response = await getOrders(); // Função que faz a requisição à API de pedidos
          const data = await response.json();
          setOrders(data);
        } catch (error) {
          console.error(error);
        }
      };

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