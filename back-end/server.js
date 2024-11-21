const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const tasks = [];

app.post("/create", (req, res) => {
    const { title } = req.body;

    if (!title) {
        return res.status(400).json({ error: "The 'title' field is required" });
    }

    const newTask = { id: Date.now(), title };
    tasks.push(newTask);

    res.status(201).json(newTask);
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
