import { Route, Routes } from "react-router";
import Home from "./components/Home";
import AddItem from "./components/AddItem";
import SelectItem from "./components/SelectItem";

function App() {
    return (
        <div className="row mt-5">
            <h1 className="text-center">Food Court App</h1>
            <div className="row mt-5">
                <div className="col"></div>
                <div className="col">
                    <Routes>
                        <Route
                            index
                            element={<Home />}
                        />
                        <Route
                            path="/add-item"
                            element={<AddItem />}
                        />
                        <Route
                            path="/select/:type"
                            element={<SelectItem />}
                        />
                    </Routes>
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default App;
