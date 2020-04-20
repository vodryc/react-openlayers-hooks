import React, { useContext } from 'react';
import { RasterContext } from '../contexts/RasterContext';
import { useTranslation } from 'react-i18next';

const MaxTempDisplay = () => {
    const { t, i18n } = useTranslation();

    const [state] = useContext(RasterContext);
    let value = '-';
    if (state.raster_value) {
        value = (state.raster_value * 9 / 5 + 32).toFixed(0) + ' F'; // Convert to Fahrenheit
    }

    return (
        <div className="maxtemp">
            <span className="label">{t('maxTempJan')}: </span>{value}
        </div>
    );
};

export default MaxTempDisplay;