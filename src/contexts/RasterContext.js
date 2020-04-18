import React, { useReducer, createContext } from "react";

export const RasterContext = createContext();

const initialState = {
    raster_value: null 
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_RASTER_VALUE":
            return {
                raster_value: action.payload.value
            }
      default:
        throw new Error();
    }
};

export const RasterContextProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);
  
    return (
      <RasterContext.Provider value={[state, dispatch]}>
        {props.children}
      </RasterContext.Provider>
    );
  };