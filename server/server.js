console.log("hello world");

const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

const inventory = ['greeting card', 'wagon', 'computer', 'table', 'chair', 'milk', 'sailboat', 'conditioner', 'rusty nail', 'desk'];

app.get("/api/inventory", (req, res) => {
    console.log(`in the "/api/inventory" endpoint callback`);
    console.log(req.query);
        if (req.query.item) {
            const item = req.query.item.toLowerCase();
            const filteredItems = inventory.filter(invItem => invItem.toLowerCase().includes(item));
            res.status(200).send(filteredItems);
        } else {
            res.status(200).send(inventory);
        }
});

app.get("/api/inventory/:index", (req, res) => {
    console.log(`in the "/api/inventory/:index" endpoint callback`);
    console.log(req.params.index);
    const index = Number(req.params.index);
    res.status(200).send(inventory[index]);
})

const SERVER_PORT = 5050;
app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));