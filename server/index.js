const express = require('express')
const tickets = require('./tickets.json');
const app = express()
const port = 3001


app.get('/tickets', (req, res) => {
    res.json(tickets);
})

app.get('/tickets/:id', (req, res) => {
    const requestId = Number(req.params.id);
    const ticket = tickets.find(t => t.id === requestId);

    if (ticket) {
        res.json(ticket);
    } else {
        res.sendStatus(404).send('Not found');
    }
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});