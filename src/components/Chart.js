import React from 'react'
import Plot from 'react-plotly.js'

const Chart = () => {
    return (
        <div>
            <Plot
                data={[
                    {
                        x: [1,2,3],
                        y: [2,6,3],
                        type: 'scatter',
                        mode: "lines+markers",
                        marker: {color: 'red'}
                    },
                    {type: 'bar', x: [1,2,3], y: [2,5,3]}
                ]}
                layout={ {width: 320, height: 240, title: 'A fancy plot'}}
            />
        </div>
    )
}

export default Chart
