const express = require("express");
const router = express.Router();
const db = require("../db");
const utils = require("../utils");

router.get("/", (req, res) => {
    const stmt = `
                    SELECT id, name, quantity, price, description, type
                    FROM items
                 `;
    db.pool.query(stmt, (error, result) => {
        res.send(utils.createResult(error, result));
    });
});

router.get("/:type", (req, res) => {
    const { type } = req.params;
    const stmt = `
                    SELECT id, name, quantity, price, description, type
                    FROM items
                    WHERE type = ?
                 `;
    db.pool.query(stmt, [type], (error, result) => {
        res.send(utils.createResult(error, result));
    });
});

router.post("/", (req, res) => {
    const { name, quantity, price, description, type } = req.body;
    console.log(req.body);

    const stmt = `
                    INSERT INTO items (name, quantity, price, description, type)
                    VALUES (?, ?, ?, ?, ?)
                 `;

    db.pool.execute(
        stmt,
        [name, quantity, price, description, type],
        (error, result) => {
            res.send(utils.createResult(error, result));
        }
    );
});

router.put("/:id", (req, res) => {
    res.send("update an item");
});

router.delete("/:id", (req, res) => {
    const { id } = req.params;

    const stmt = `
                    DELETE FROM items
                    WHERE id = ?   
                 `;

    db.pool.execute(stmt, [id], (error, result) => {
        res.send(utils.createResult(error, result));
    });
});

module.exports = router;
