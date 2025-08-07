"use client";

import { createContext, useReducer } from 'react';

/**
 * Creates a Context object. When React renders a component that subscribes
 * to this Context object, it will read the current context value from the
 * closest matching Provider in the tree.
 */
export const StateContext = createContext();

export const initialState = {
    cart: [],
    favorite: [],
}

// reducer function
export const reducer = (state, action) => {
    console.log(action);

    // action switch
    switch(action.type){




        default:
            return state;
    }
}

// state provider component
export const StateProvider = ({children}) => {
 const [state, dispatch] = useReducer(reducer, initialState);

 return(
    <StateContext.Provider value={{state, dispatch}}>
        {children}
    </StateContext.Provider>
 )
}

export const useStateValue = () => {
    useContext(StateContext);
}