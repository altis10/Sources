import { useEffect, useRef, useState } from "react";
import environment from "../environments/environment";
import { MeteoAPIAddress } from "../models/geoApiAddresses";
import useGetRequest from "../hooks/useGetRequest";
import { GridCoordinates } from "../models/geography";

const GetRange = ({region}) => {
    let hidden = true;
    const range = useRef<GridCoordinates>({
        r: 0,
        c: 0
    });
    const {get, loadingState} = useGetRequest(`${environment.apiUrl}${MeteoAPIAddress(region, '', '', '', '').range}`);

    useEffect(() => {
        const fetchRange = async () => {
            range.current = await get();
        };
        if (region) {
            fetchRange();            
        }
    }, [get, region]);

    return (
        <>
            <br />
            <br />
            <div className="card city-info" hidden={hidden}>

            </div>
        </>
    );
};

export default GetRange;