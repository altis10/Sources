import { useEffect, useRef, useState } from "react";
import HouseRow from "./houseRow";
import AddHouse from "./addHouse";

const HouseList = () => {
    const [houses, setHouses] = useState([]);
    const initialHousesInDb = useRef(0);

    useEffect(() => {
        const fetchHouses = async () => {
            const response = await fetch("/api/houses");
            const houses = await response.json();
            const initLength = houses.length;
            setHouses(houses);
            initialHousesInDb.current = initLength;
        };
        fetchHouses();
        console.log("FUCK");
    }, []);

    return (
        <>
            <div className="row mb-2">
                <h5 className="themeFontColor text-center">
                    Houses currently on the market
                </h5>
            </div>
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Address</th>
                        <th>Country</th>
                        <th>Asking Price</th>
                    </tr>
                </thead>
                <tbody>
                    {houses.map(h => <HouseRow key={h.id} house={h}></HouseRow>)}
                </tbody>
            </table>
            <AddHouse houses={houses} setHouses={setHouses} initH={initialHousesInDb.current}/>
        </>
    );
};

export default HouseList;