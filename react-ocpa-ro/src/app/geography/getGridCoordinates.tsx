import { useEffect, useRef, useState } from "react";
import environment from "../environments/environment";
import { GeoAPIAddress } from "../models/geoApiAddresses";
import useGetRequest from "../hooks/useGetRequest";
import { GridCoordinates } from "../models/geography";

const GetGridCoordinates = ({region, subregion, city}) => {
    let hidden = true;
    const cityInfo = useRef<GridCoordinates>({
        r: 0,
        c: 0
    });
    const {get, loadingState} = useGetRequest(`${environment.apiUrl}${GeoAPIAddress(region, subregion, city).gridCoordinate}`);

    useEffect(() => {
        const fetchCityInfo = async () => {
            cityInfo.current = await get();
        };
        if (region && subregion && city) {
            fetchCityInfo();            
        }
    }, [city, get, region, subregion]);

    return (
        <>
            <br />
            <br />
            <div className="card city-info" hidden={hidden}>

            </div>
        </>
    );
};

export default GetGridCoordinates;