import { useEffect, useRef, useState } from "react";
import useGetCities from "../hooks/useGetCities";
import environment from "../environments/environment";
import GeoAPIAddress from "../models/geoApiAddresses";
import useGetRequest from "../hooks/useGetRequest";
import { City } from "../models/geography";

const GetCityInfo = ({region, subregion, city}) => {
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

/*     const onCityChanged = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedCity(event.target.value);
    };
 */
    return (
        <>
            <br />
            <br />
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
};

export default GetCityInfo;