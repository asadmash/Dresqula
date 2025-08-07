"use client";

import { createContext, useContext, useReducer } from "react";

/**
 * Creates a Context object. When React renders a component that subscribes
 * to this Context object, it will read the current context value from the
 * closest matching Provider in the tree.
 */
export const StateContext = createContext();

export const initialState = {
  cart: [],
  favorite: [],
};

// reducer function
export const reducer = (state, action) => {
  console.log(action);

  // action switch
  switch (action.type) {
    case "ADD_TO_CART":
      // LOGIC TO ADD AN ITEM TO THE CART

      return {
        ...state, //keep the existing state(like fav)
        cart: [...state.cart, action.payload],
        //add the new item to the cart array
      };

    case "REMOVE_FROM_CART":
        // find the item of the matching id
        const index = state.cart.findIndex((cartItem) => cartItem.id === action.payload.id);

        // create a new copy of the cart
        let newCart = [...state.cart];

        if(index >= 0){//if the item is found
            // remove it from the new array
            newCart.splice(index, 1);
        } else {
            console.warn(`Can't remove product (id: ${action.payload.id}) as it's not in the cart!`)
        }

        return {
            ...state,
            cart: newCart,
        }

    default:
      return state;
  }
};

// state provider component
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
  useContext(StateContext);
};
