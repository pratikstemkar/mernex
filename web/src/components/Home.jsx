import { useState } from "react";
import { Link } from "react-router";

const Home = () => {
    const [type, setType] = useState("");

    return (
        <>
            <form>
                <input
                    type="radio"
                    name="type"
                    value="veg"
                    id="veg"
                    onChange={e => setType(e.target.value)}
                />{" "}
                <label htmlFor="veg">Veg</label>
                <br />
                <input
                    type="radio"
                    name="type"
                    value="nonveg"
                    id="non-veg"
                    onChange={e => setType(e.target.value)}
                />{" "}
                <label htmlFor="non-veg">Non Veg</label>
            </form>
            {type}
            <Link
                to={`/select/${type}`}
                className="btn btn-primary me-2 mt-2"
            >
                Select Type
            </Link>
            <Link
                to="/add-item"
                className="btn btn-primary mt-2"
            >
                Add Item
            </Link>
        </>
    );
};

export default Home;
