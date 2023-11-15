import { useEffect, useRef, useState } from "react";
import useGetCities from "../hooks/useGetCities";
import environment from "../environments/environment";
import GeoAPIAddress from "../models/geoApiAddresses";
import useGetRequest from "../hooks/useGetRequest";
import GetCityInfo from "./getCityInfo";

const GetCities = ({ meteoDataChanged, region, subregion }) => {
    const cities = useRef(['']);
    const [selectedCity, setSelectedCity] = useState('');
    const {get, loadingState} = useGetRequest(`${environment.apiUrl}${GeoAPIAddress(region, subregion, '').cities}`);

    useEffect(() => {
        const fetchCities = async () => {
            cities.current = await get();
        };
        if (region && subregion) {
            fetchCities();
        }
    }, [get, region, subregion]);

    const onCityChanged = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedCity(event.target.value);
    };

    return (
        <>
            <label className="label-city">City:</label>
            <select value={selectedCity} onChange={onCityChanged} className="select-city">
                <option value="">Select</option>
                {cities.current?.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            <p>Selected city: {selectedCity}</p>
            <GetCityInfo meteoDataChanged={meteoDataChanged} region={region} subregion={subregion} city={selectedCity}></GetCityInfo>
        </>
    );
};

export default GetCities;