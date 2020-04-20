import React from 'react';
import OLMapFragment from './OLMapFragment';
import MaxTempDisplay from './MaxTempDisplay';
import Chart from './Chart';
import { RasterContextProvider } from '../contexts/RasterContext';

const App = () => {
  return ( 
    <div>
      <RasterContextProvider>
        <Chart />
        <MaxTempDisplay />
        <OLMapFragment />
      </RasterContextProvider>
    </div>
  );
}

export default App