const express = require("express");
const app = express();


const port = process.env.PORT || 3000;
const path = require('path');
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/html/index.html')
});
app.use(express.static(path.join(__dirname + '/css/styles.css')));
app.listen(port, function () {
    console.log("Server is running at " + port);
});