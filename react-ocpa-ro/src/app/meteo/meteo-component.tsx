import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { City, GridCoordinates } from '../models/geography';
import { MeteoDailyData, MeteoData } from '../models/meteo';
import loadingStatus from '../helpers/loadingStatus';
import LoadingIndicator from '../helpers/loadingIndicator';
import GetRegions from '../geography/getRegions';

const MeteoComponent = () => {
    const meteoDataChanged = useRef<boolean>();4
    const [mData, setMeteoData] = useState();
    
    meteoDataChanged.current = true;

    let isFetching = false;
    const timerId = 0;
  
  
    // let regions: string[];
    let selRegion: string = '';
  
    let subregions: string[];
    let selSubregion: string;
  
    let cities: string[];
    let selCity: string;
  
    let city: City;
    let grid: GridCoordinates;
  
  
    let today: string;
    let todayData: MeteoDailyData;

    if (meteoDataChanged.current) {
        return (
            <>
                <h5>Please select the desired city for the forecast.&nbsp;You may need to select the Region and Country/District first.</h5>
                <GetRegions meteoDataChanged={meteoDataChanged}></GetRegions>
            </>
        );
    } else {
        return (
            <>
                <h5>{meteoDataChanged?.current?.gridCoordinates?.c}</h5>
            </>
        );
    }
};

export default MeteoComponent;