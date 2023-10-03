import { useEffect } from "react";

const AddHouse = ({houses, setHouses, initH}) => {

    let newHouse: any | null = null;

    useEffect(() => {
        if (initH > 0 && initH < houses.length) {
            updateAPIHouses(houses[houses.length-1]);
        }
    },[houses, initH]);

    const updateAPIHouses = async (house: any | null) => {
        const response = await fetch("/api/houses", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(house)
        })
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.error(error);
        });
    };

    const addHouseFunction = () => {
        newHouse =
        {
            id: 6,
            address: "32 ValleyWay, New York",
            country: "USA",
            description: "This luxurious three bedroom flat is contemporary in style and benefits from the use of a gymnasium and a reserved underground parking space.",
            price: 1000000,
            photo: "164558"
        };
        setHouses([...houses, newHouse]);
    };

    return (
        <button className="btn btn-primary" onClick={addHouseFunction}>
            Add
        </button>
    );
}

export default AddHouse;