import React, { useContext } from 'react'
import Plot from 'react-plotly.js'
import { RasterContext } from '../contexts/RasterContext';

const Chart = () => {
    const [state] = useContext(RasterContext);

    return (
        <div>
            <Plot
                data={[
                    {
                        y: state.raster_history,
                        type: 'scatter',
                        mode: "lines+markers",
                        marker: {color: 'red'}
                    }
                ]}
                layout={ {width: 600, height: 240, title: 'A fancy plot'}}
            />
        </div>
    )
}

export default Chart
