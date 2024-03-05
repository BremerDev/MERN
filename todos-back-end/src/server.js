const express = require('express');

const fakeTodos = [{
    id: '123',
    text: 'Groceries',
    isCompleted: false,
},{
    id: '321',
    text: 'Learn React',
    isCompleted: true,
}];

const app = express();

app.get('/todos', (req, res) => {
    res.json(fakeTodos);
})

app.listen(8080, () => {
    console.log("Server is listening on port 8080.")
});