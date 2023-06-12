
import { createContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState('');

    const addToUser = (userObj) => {
        setUser(userObj);
    }
    return (
        <UserContext.Provider value={{user, addToUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContext;


