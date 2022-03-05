const express = require('express');

const friendsController = require('./controllers/friends.controller');
const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

app.get('/messages', (req, res) => {
    res.send('<ul><li>Hello!</li></ul>');
})
// Friends
app.post('/friends', friendsController.postFriend);
app.get('/friends', friendsController.getFriends);
app.get('/friends/:friendId', friendsController.getFriend);

app.post('/messages', (req, res) => {
    console.log('Updating Messages....');
})

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
})