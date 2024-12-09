import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";

const SelectItem = () => {
    const { type } = useParams();
    const [items, setItems] = useState([]);
    const [error, setError] = useState("");

    const loadItems = () => {
        axios
            .get(`http://localhost:4000/items/${type}`)
            .then(res => {
                if (res.data.status === "success") {
                    setItems(res.data.data);
                } else {
                    setError(res.data.error);
                }
            })
            .catch(err => console.log(err));
    };

    useEffect(() => loadItems(), []);

    return (
        <div>
            SELECT ITEM
            <div>{JSON.stringify(items)}</div>
            <div>{error !== "" ? JSON.stringify(error) : ""}</div>
        </div>
    );
};

export default SelectItem;
