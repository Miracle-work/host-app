import React, { useState } from "react";

const AuthContext=React.createContext({
    token:'',
    isLoggedIn:false,
    login:(token)=>{},
    logout:()=>{},
});

export const AuthContextProvider=(props)=>{

    const [token, setToken]=useState(localStorage.getItem('token'))
    const userIsLoggedIn=!!token
    
    const logoutHandler = ()=> {
        localStorage.removeItem('token')
        setToken(null)
    }

    const loginHandler = (token,expirationTime)=> {
        localStorage.setItem('token',token)
        setToken(token)
        setTimeout(logoutHandler, expirationTime)
    }

    const contextValue={
        token:token,
        isLoggedIn:userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler,
    }

    return (
            <AuthContext.Provider value={contextValue}>
                {props.children}
            </AuthContext.Provider>
        )
}

export default AuthContext
