import { useEffect, useRef, useState } from "react";
import environment from "../environments/environment";
import GeoAPIAddress from "../models/geoApiAddresses";
import GetSubRegions from "./getSubRegions";
import useGetRequest from "../hooks/useGetRequest";

const initialLocation = {
    region: '',
    subregion: '',
    city: ''
};

const GetRegions = () => {
    const regions = useRef(['']);
    const [location, setLocation] = useState(initialLocation);
    const [selectedRegion, setSelectedRegion] = useState('');
    const [selectedSubRegion, setSelectedSubRegion] = useState('');
    const [selectedCity, setSelectedCity] = useState('');

    const {get, loadingState} = useGetRequest(`${environment.apiUrl}${GeoAPIAddress(initialLocation).regions}`);

    useEffect(() => {
        const fetchRegions = async () => {
            regions.current = await get();
        };
        fetchRegions();
    }, [get]);

    const onRegionChanged = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setLocation({ ...location, region: event.target.value.toString(), subregion: '', city: '' });
    };

    return (
        <>
            <label className="label-region">Region:</label>
            <select value={location.region} onChange={onRegionChanged} className="select-region">
                <option value="">Select</option>
                {regions.current?.map((region) => (
                    <option key={region} value={region}>
                        {region}
                    </option>
                ))}
            </select>
            <p>Selected region: {selectedRegion}</p>
            <GetSubRegions location={location} setLocation={setLocation}></GetSubRegions>
        </>
    );
};

export default GetRegions;