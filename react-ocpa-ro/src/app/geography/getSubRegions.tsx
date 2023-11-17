import { useEffect, useRef } from "react";
import environment from "../environments/environment";
import GeoAPIAddress from "../models/geoApiAddresses";
import GetCities from "./getCities";
import useGetRequest from "../hooks/useGetRequest";

const GetSubRegions = ({ location, setLocation }) => {
    const subRegions = useRef(['']);
    const {get, loadingState} = useGetRequest(`${environment.apiUrl}${GeoAPIAddress(location).subregions}`);

    useEffect(() => {
        const fetchSubRegions = async () => {
            subRegions.current = await get();
        };
        if (location.region) {
            fetchSubRegions();
        }
    }, [get, location.region]);

    const onSubRegionChanged = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLocation({ ...location, subregion: event.target.value, city: '' });
    };

    return (
        <>
        <label className="label-subregion">SubRegion:</label>
        <select value={location.subregion} onChange={onSubRegionChanged} className="select-subregion">
            <option value="">Select</option>
            {subRegions.current?.map((subRegion) => (
                <option key={subRegion} value={subRegion}>
                    {subRegion}
                </option>
            ))}
        </select>
        <p>Selected subRegion: {location.subregion}</p>
        <GetCities location={location} setLocation={setLocation}></GetCities>
        </>
    );
};

export default GetSubRegions;