"use client";

import { createContext, useContext, useState } from "react";

const AppConext = createContext();

export function AppWrapper({ children }) {
  let [basket, setBasket] = useState([]);
  return (
    <AppConext.Provider
      value={{
        basket,
        setBasket,
      }}
    >
      {children}
    </AppConext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppConext);
}
