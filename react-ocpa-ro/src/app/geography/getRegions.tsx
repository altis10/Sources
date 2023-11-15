import { useEffect, useRef, useState } from "react";
import environment from "../environments/environment";
import GeoAPIAddress from "../models/geoApiAddresses";
import GetSubRegions from "./getSubRegions";
import useGetRequest from "../hooks/useGetRequest";

const GetRegions = ({ meteoDataChanged }) => {
    const regions = useRef(['']);
    const [selectedRegion, setSelectedRegion] = useState('');
    const {get, loadingState} = useGetRequest(`${environment.apiUrl}${GeoAPIAddress('', '', '').regions}`);

    useEffect(() => {
        const fetchRegions = async () => {
            regions.current = await get();
        };
        fetchRegions();
    }, [get]);

    const onRegionChanged = (event: { target: { value: React.SetStateAction<string>; }; }) => {
        setSelectedRegion(event.target.value);
    };

    return (
        <>
            <label className="label-region">Region:</label>
            <select value={selectedRegion} onChange={onRegionChanged} className="select-region">
                <option value="">Select</option>
                {regions.current?.map((region) => (
                    <option key={region} value={region}>
                        {region}
                    </option>
                ))}
            </select>
            <p>Selected region: {selectedRegion}</p>
            <GetSubRegions meteoDataChanged={meteoDataChanged} region={selectedRegion}></GetSubRegions>
        </>
    );
};

export default GetRegions;