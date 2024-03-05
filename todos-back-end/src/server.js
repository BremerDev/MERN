const express = require('express');

const app = express();

app.get('/test', (req, resp) => {
    resp.send('Hello from the backend!');
});

app.listen(8080, () => {
    console.log("Server is listening on port 8080.")
});