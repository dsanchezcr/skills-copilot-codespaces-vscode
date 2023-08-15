// Create web server using express
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const comments = [
    {
        name: 'John',
        comment: 'Hello'
    }
];

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/comments', (req, res) => {
    res.json(comments);
});

app.post('/comments', (req, res) => {
    const comment = req.body;
    comments.push(comment);
    res.json({
        message: 'Successfully added comment'
    });
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});