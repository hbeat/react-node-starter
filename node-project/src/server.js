const express = require('express');


const app = express();

app.use(require('cors'));
app.use(require('morgan'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Hello World!')
});
module.exports = app;
