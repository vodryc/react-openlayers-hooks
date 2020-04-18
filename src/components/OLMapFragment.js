import React, { useContext, useEffect } from 'react'
import raster from '../api/raster';
import { Map,View } from 'ol'
import { Tile as TileLayer } from 'ol/layer'
import { OSM, XYZ } from 'ol/source'
import { ScaleLine, ZoomSlider, MousePosition, OverviewMap, defaults } from 'ol/control'
import { RasterContext } from '../contexts/RasterContext';

const OLMapFragment = () => {

    const [, dispatch] = useContext(RasterContext);
    
    useEffect(() => {

        // Create an Openlayer Map instance with two tile layers
        const map = new Map({
            //  Display the map in the div with the id of map
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                    projection: 'EPSG:3857'
                }),
                // new TileLayer({
                //     source: new XYZ({
                //         attributions: 'My Test Tiles',
                //         url: 'http://localhost:3001/tiles/{z}/{x}/{y}.png',
                //         maxZoom: 20,
                //         crossOrigin: '',
                //         projection: 'EPSG:3857'
                //   })
                // })
            ],
            // Add in the following map controls
            controls: defaults().extend([
                new ZoomSlider(),
                new MousePosition(),
                new ScaleLine(),
                new OverviewMap()
            ]),
            // Render the tile layers in a map view with a Mercator projection
            view: new View({
                projection: 'EPSG:4326',
                center: [0, 0],
                zoom: 2
            })
        })

        map.on('click', async function(e) {
            const response = await raster(e.coordinate[1], e.coordinate[0]);
            let result = null;
            
            if (response.data && response.data.length > 0) {
                result = response.data[0].st_value;
            }

            dispatch({
                type: 'SET_RASTER_VALUE',
                payload: { value: result}
            })
        });
    });

    const style = {
        width: '100%',
        height:'100%',
        position: 'absolute',
        backgroundColor: '#cccccc',
    }

    return (
        <div id='map' style={style} ></div>
    )
}
export default OLMapFragment