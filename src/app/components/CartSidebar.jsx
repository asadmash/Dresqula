"use client";

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { useStateValue } from '../context/StateContext';
import { IoMdClose } from "react-icons/io";

const CartSidebar = ({ onClose }) => {
  const { state, dispatch } = useStateValue();
  const sidebarRef = useRef();

  // Effect to handle clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        onClose();
      }
    };

    // Add listener when component mounts
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup listener when component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const removeFromCart = (id) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: { id },
    });
  };

  const cartTotal = state.cart.reduce((total, item) => total + item.price, 0);

  return (
    <div ref={sidebarRef} className="fixed top-0 right-0 h-full w-full max-w-sm bg-white shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out">
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={onClose} className="text-2xl text-gray-500 hover:text-gray-800">
          <IoMdClose />
        </button>
      </div>

      {state.cart.length === 0 ? (
        <p className="text-center text-gray-500 mt-8">Your cart is empty.</p>
      ) : (
        <div className="flex flex-col h-[calc(100%-100px)]">
          <div className="flex-grow overflow-y-auto pr-2">
            {state.cart.map((item) => (
              <div key={item.id} className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Image src={item.image} alt={item.name} width={64} height={64} className="rounded-md" />
                  <div className="ml-4">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 font-semibold">
                  Remove
                </button>
              </div>
            ))}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${cartTotal.toFixed(2)}</span>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg mt-4 hover:bg-blue-700">
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;