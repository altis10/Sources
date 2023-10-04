import { useEffect, useRef, useState } from "react";
import useGetRequest from "./useGetRequest";

const useHouses = () => {
    const [houses, setHouses] = useState([]);
    const initialHousesInDb = useRef(0);
    const {get, loadingState} = useGetRequest("/api/houses");

    useEffect(() => {
        const fetchHouses = async () => {
            const houses = await get();
            setHouses(houses);
            initialHousesInDb.current = houses.length;
        };
        fetchHouses();
    }, [get]);

    return { houses, setHouses, initialHousesInDb, loadingState };
}

export default useHouses;