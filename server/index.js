const express = require('express')
const tickets = require('./tickets.json');
const app = express()
const port = 3001


app.get('/tickets', (req, res) => {
    res.json(tickets);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});