import { useEffect, useRef, useState } from "react";
import environment from "../environments/environment";
import GeoAPIAddress from "../models/geoApiAddresses";
import useGetRequest from "../hooks/useGetRequest";
import { City } from "../models/geography";
import GetMeteoData from "./getMeteoData";

const GetCityInfo = ({ location , setLocation }) => {
    const cityInfo = useRef<City>({
        default: false,
        latitude: 0,
        longitude: 0,
        name: "",
        subregion: ''
    });
    const {get, loadingState} = useGetRequest(`${environment.apiUrl}${GeoAPIAddress(location).cityInfo}`);

    useEffect(() => {
        const fetchCityInfo = async () => {
            cityInfo.current = await get();
        };
        if (!!location.region && !!location.subregion && !!location.city) {
            fetchCityInfo();            
        }
    }, [get, location.region, location.subregion, location.city]);

    if (!!location.region && !!location.subregion && !!location.city) {
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
        </>
    );
    }
};

export default GetCityInfo;