import React, { useState, createContext, useContext } from 'react';

export const AppContext = createContext()

export const AppProvider = (props) => {
    const [ state, setState ] = useState({})
    return (
        <AppContext.Provider value={ [ state, setState ]}>
            {props.children}
        </AppContext.Provider>
    )
}