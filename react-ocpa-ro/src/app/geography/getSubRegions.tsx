import { useEffect, useRef, useState } from "react";
import useGetSubRegions from "../hooks/useGetSubRegions";
import environment from "../environments/environment";
import GeoAPIAddress from "../models/geoApiAddresses";
import GetCities from "./getCities";
import useGetRequest from "../hooks/useGetRequest";

const GetSubRegions = ({region}) => {
    const subRegions = useRef(['']);
    const [selectedSubRegion, setSelectedSubRegion] = useState('');
    const {get, loadingState} = useGetRequest(`${environment.apiUrl}${GeoAPIAddress(region, '', '').subregions}`);

    useEffect(() => {
        const fetchRegions = async () => {
            subRegions.current = await get();
        };
        if (region) {
            fetchRegions();
        }
    }, [get, region]);

    const onSubRegionChanged = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedSubRegion(event.target.value);
    };

    return (
        <>
            <label className="label-subregion">SubRegion:</label>
            <select value={selectedSubRegion} onChange={onSubRegionChanged} className="select-subregion">
                <option value="">Select</option>
                {subRegions.current?.map((subRegion) => (
                    <option key={subRegion} value={subRegion}>
                        {subRegion}
                    </option>
                ))}
            </select>
            <p>Selected subRegion: {selectedSubRegion}</p>
            <GetCities region={region} subregion={selectedSubRegion}></GetCities>
        </>
    );
};

export default GetSubRegions;