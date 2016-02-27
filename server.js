const express = require('express');
const app = express();

app.use(express.static(__dirname + '/'));

var server = app.listen(3000, function () {
    var port = server.address().port;
    console.log('Alive on port %s', port);
});


