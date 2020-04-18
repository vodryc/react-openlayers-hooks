import React from 'react';
import OLMapFragment from './OLMapFragment';
import MaxTempDisplay from './MaxTempDisplay';
import { RasterContextProvider } from '../contexts/RasterContext';

const App = () => {
  return ( 
    <div>
      <RasterContextProvider>
        <MaxTempDisplay />
        <OLMapFragment />
      </RasterContextProvider>
    </div>
  );
}

export default App