const path = require('path');

function getMessages(req, res) {
    res.sendFile(path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg'));
    // res.send('<ul><li>Hello!</li></ul>');
}

function postMessage(req, res) {
    console.log('Updating Messages....')
}

module.exports = {
    getMessages,
    postMessage
};