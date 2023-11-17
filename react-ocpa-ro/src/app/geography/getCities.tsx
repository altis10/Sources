import { useEffect, useRef, useState } from "react";
import environment from "../environments/environment";
import GeoAPIAddress from "../models/geoApiAddresses";
import useGetRequest from "../hooks/useGetRequest";
import GetCityInfo from "./getCityInfo";
import GetMeteoData from "./getMeteoData";

const GetCities = ({ location, setLocation }) => {
    const cities = useRef(['']);
    const [selectedCity, setSelectedCity] = useState('');
    const {get, loadingState} = useGetRequest(`${environment.apiUrl}${GeoAPIAddress(location).cities}`);

    useEffect(() => {
        const fetchCities = async () => {
            cities.current = await get();
        };
        if (location.region && location.subregion) {
            fetchCities();
        }
    }, [get, location.region, location.subregion]);

    const onCityChanged = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLocation({ ...location, city: event.target.value });
    };

    return (
        <>
            <label className="label-city">City:</label>
            <select value={location.city} onChange={onCityChanged} className="select-city">
                <option value="">Select</option>
                {cities.current?.map((city) => (
                    <option key={city} value={city}>
                        {city}
                    </option>
                ))}
            </select>
            <p>Selected city: {selectedCity}</p>
            <GetCityInfo location={location} setLocation={setLocation}></GetCityInfo>
            <GetMeteoData location={location} skip={0} take={0} />
        </>
    );
};

export default GetCities;