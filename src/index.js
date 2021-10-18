const express = require('express');
const app = express();
app.get('/', function(req, res) {
    res.send("hello world")
});

app.listen(8000, function() {
    console.log('prot 300');
});