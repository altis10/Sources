import { useState } from "react";
import HouseRow from "./houseRow";

const houseArray = [
    {
        id: 1,
        address: "12 Valley of Kings, Geneva",
        country: "Switzerland",
        price: 900000
    },
    {
        id: 2,
        address: "89 Road of Forks, Bern",
        country: "Switzerland",
        price: 500000
    }
];

const HouseList: any = () => {
    const [houses, setHouses] = useState(houseArray);
    const [counter, setCounter] = useState(0);
    const buttonClicked = () => setCounter(counter + 1);

    const AddHouse = () => {
        setHouses([
            ...houses,
            {
                id:3,
                address: "32 ValleyWay, New York",
                country: "USA",
                price: 1000000
            }
        ]);
        setCounter(current => counter + 1);
    };

    return (
        <>
        {counter}
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
                {houses.map((h) => <HouseRow key={h.id} house={h} />)}
            </tbody>
        </table>
        <button className="btn btn-primary" onClick={AddHouse}>
            Add
        </button>
        </>
    );
};

export default HouseList;