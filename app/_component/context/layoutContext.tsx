"use client";
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect } from "react";

export interface LayoutContextModel {
  // setLoginUserData: any;
  // loginUserData: any;
}

const initialState: LayoutContextModel = {};

export const LayoutContext = createContext(initialState);

export const LayoutContextProvider = ({ children }: any) => {
  useEffect(() => {}, []);

  return <LayoutContext.Provider value={{}}>{children}</LayoutContext.Provider>;
};
