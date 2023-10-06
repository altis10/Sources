import React, { ChangeEvent, useEffect, useRef, useState } from 'react';
import { City, GridCoordinates } from '../models/geography';
import { MeteoDailyData } from '../models/meteo';
import useGetRegions from '../hooks/useGetRegions';
import environment from '../environments/environment';
import loadingStatus from '../helpers/loadingStatus';
import LoadingIndicator from '../helpers/loadingIndicator';
import GetRegions from '../geography/getRegions';
import GetSubRegions from '../geography/getSubRegions';

const MeteoComponent = () => {
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
  
    let meteoData: MeteoDailyData[][] = [];
  
    let today: string;
    let todayData: MeteoDailyData;
/*     const fetchEvent$ = new Subject();
    const regionChanged$ = new Subject();
    const subregionChanged$ = new Subject();
  
    queryRegion: string = undefined;
    querySubregion: string = undefined;
    queryCity: string = undefined;
    queryUnit: string = undefined; */



    return (
        <div className='row'>
            <h5>Please select the desired city for the forecast.&nbsp;You may need to select the Region and Country/District first.</h5>
            <div className='row mt-10 pt-10'>
                <GetRegions></GetRegions>
            </div>
        </div>
    );
};

export default MeteoComponent;