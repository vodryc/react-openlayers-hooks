import React, { useReducer, createContext } from "react";
import { convertToF } from '../utils';

export const RasterContext = createContext();

const initialState = {
    raster_value: null,
    raster_history: [] 
};

const reducer = (state, action) => {
    switch (action.type) {
        case "SET_RASTER_VALUE":
            const fValue = convertToF(action.payload.value);
            
            return {
                raster_value: fValue,
                raster_history: [...state.raster_history, fValue]
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