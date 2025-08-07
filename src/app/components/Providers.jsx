"use client";

import { StateProvider } from "../context/StateContext";
import AuthProvider from "./AuthProvider";


export function Providers({children}){
    return (
        <AuthProvider>
            <StateProvider>
                {children}
            </StateProvider>
        </AuthProvider>
    )
}