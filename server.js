const express = require('express');
const app = express();

app.use(express.static(__dirname + '/assets'));

const server = app.listen(3000, function () {
    const port = server.address().port;
    console.log('Alive on port %s', port);
});
