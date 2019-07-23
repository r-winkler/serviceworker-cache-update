const express = require('express');
const path = require('path');

const app = express();

const publicDir = path.join(__dirname,'/public');
app.use(express.static(publicDir));

app.all('/*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000, function () {
    console.log('Listening on port 3000!');
});