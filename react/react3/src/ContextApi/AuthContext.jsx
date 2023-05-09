import { createContext } from "react";
import React from 'react'
let data={username:'ali', email:'alion@gm.com'} 

export const AuthContext = createContext({})


const AuthContextProvider = ({children}) => {
  return (
    <AuthContext.Provider value={data}>
         {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider