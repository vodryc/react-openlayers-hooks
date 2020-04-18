import axios from 'axios';

export default async (lat, lon) => {
    return await axios.get('http://localhost:3001/raster/maxtempmonthly/cell-value?lat=' + lat + '&lng=' + lon);
}