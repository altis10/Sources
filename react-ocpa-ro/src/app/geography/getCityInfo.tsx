import { useEffect, useRef, useState } from "react";
import environment from "../environments/environment";
import GeoAPIAddress from "../models/geoApiAddresses";
import useGetRequest from "../hooks/useGetRequest";
import { City } from "../models/geography";
import GetMeteoData from "./getMeteoData";

const GetCityInfo = ({ meteoDataChanged, region, subregion, city }) => {
    const cityInfo = useRef<City>({
        default: false,
        latitude: 0,
        longitude: 0,
        name: "",
        subregion: ''
    });
    const {get, loadingState} = useGetRequest(`${environment.apiUrl}${GeoAPIAddress(region, subregion, city).cityInfo}`);

    useEffect(() => {
        const fetchCityInfo = async () => {
            cityInfo.current = await get();
        };
        if (region && subregion && city) {
            fetchCityInfo();            
        }
    }, [city, get, region, subregion]);

    if (!!region && !!subregion && !!city) {
    return (
        <>
             <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{cityInfo.current.name}</h5>
                    <p className="card-text">{cityInfo.current.subregion}</p>
                    <p className="card-text">Latitude: {cityInfo.current.latitude} degree</p>
                    <p className="card-text">Longitude: {cityInfo.current.longitude} degree</p>
                </div>
                <div className="card-footer">
                </div>
            </div>
            <GetMeteoData meteoDataChanged={meteoDataChanged} region={region} subregion={subregion} city={city} skip={0} take={0} />
        </>
    );
    }
};

export default GetCityInfo;