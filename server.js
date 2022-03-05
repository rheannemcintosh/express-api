const express = require('express');

const messagesController = require('./controllers/messages.controller');
const friendsRouter = require('./routes/friends.router');

const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    const start = Date.now();
    next();
    const delta = Date.now() - start;
    console.log(`${req.method} ${req.url} ${delta}ms`);
});

app.use(express.json());

// Messages
app.get('/messages', messagesController.getMessages);
app.post('/messages', messagesController.postMessage);
app.use('/friends', friendsRouter);

app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
})