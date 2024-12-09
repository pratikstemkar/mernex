const express = require("express");
const router = express.Router();
const db = require("../db");
const utils = require("../utils");

router.get("/", (req, res) => {
    const stmt = `
                    SELECT id, name, quantity, price
                    FROM cart
                 `;

    db.pool.query(stmt, (error, result) => {
        res.send(utils.createResult(error, result));
    });
});

router.post("/", (req, res) => {
    const { name, quantity, price } = req.body;
    const stmt = `
                    INSERT INTO cart (name, quantity, price)
                    VALUES (?, ?, ?)
                 `;
    db.pool.execute(stmt, [name, quantity, price], (error, result) => {
        res.send(utils.createResult(error, result));
    });
});

router.put("/:id", (req, res) => {
    res.send("update a cart item");
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    const stmt = `
                    DELETE FROM cart
                    WHERE id = ?
                 `;
    db.pool.execute(stmt, [id], (error, result) => {
        res.send(utils.createResult(error, result));
    });
});

module.exports = router;
