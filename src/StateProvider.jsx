import React, { createContext, useContext, useReducer } from "react";

// creating data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// pull info from data layout
export const useStateValue = () => useContext(StateContext);
