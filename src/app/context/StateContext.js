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

        // add remove from favorite
        case 'TOGGLE_FAVORITE':
            // check the item is already in favorite
            const isFavorite = state.favorites.some((item) => item.id === action.payload.id);

            let newFavorites;

            if(isFavorite){
                // If it is a favorite filter it out
                newFavorites = state.favorites.filter((item) => item.id !== action.payload.id);
            } else {
                // if its not a favorite, add it to the array
                newFavorites = [...state.favorites, action.payload];
            }

            return{
                ...state,
                favorites: newFavorites,
            }

    case 'SET_STATE':
      return action.payload;

    default:
      return state;
  }
};

// state provider component
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Effect to load state from localStorage on initial render
  useEffect(() => {
    try {
      const storedState = localStorage.getItem('app_state');
      if (storedState) {
        dispatch({ type: 'SET_STATE', payload: JSON.parse(storedState) });
      }
    } catch (error) {
      console.error("Failed to load state from localStorage", error);
    }
  }, []);

  // Effect to save state to localStorage whenever it changes
  useEffect(() => {
    try {
      // We don't save the initial state on the first render
      if (state !== initialState) {
        localStorage.setItem('app_state', JSON.stringify(state));
      }
    } catch (error) {
      console.error("Failed to save state to localStorage", error);
    }
  }, [state]);

  return (
    <StateContext.Provider value={{ state, dispatch }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => {
 return useContext(StateContext);
};
