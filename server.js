const express = require("express");
const cors = require("cors");

const itemRouter = require("./routes/items");
const cartRouter = require("./routes/carts");

const app = express();
app.use(express.json());
app.use(cors());

app.use("/items", itemRouter);
app.use("/cart", cartRouter);

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(4000, "0.0.0.0", () =>
    console.log("Server running on port 4000...")
);
