"use client"
import React, { useState } from 'react'
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import { FileSaveContext } from './_context/FileSaveContext';

function Provider({ children }) {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  const [fileSave,setFileSave]=useState(0); //Used to Update Notes on change of this value using context
  return (
    <div>
      <ConvexProvider client={convex}>
        <PayPalScriptProvider options={{ clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID }}>
          <FileSaveContext.Provider value={{fileSave,setFileSave}}>
            {children}
          </FileSaveContext.Provider>
        </PayPalScriptProvider>
      </ConvexProvider>

    </div>
  )
}

export default Provider