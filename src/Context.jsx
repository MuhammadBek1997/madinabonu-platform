import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext()

const AppProvider = ({children}) =>{
    // App.jsx dagi narsalar funksiyalar statelar hullas hammasi
    return(
        <AppContext.Provider value={{
            courses,theme,openTheme,setOpenTheme,
            handleChangeTheme,login,setLogin,
            name,setName,surname,setSurname,
            user,setUser
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}

export default AppProvider