function getMessages(req, res) {
    res.send('<ul><li>Hello!</li></ul>');
}

function postMessage(req, res) {
    console.log('Updating Messages....')
}

module.exports = {
    getMessages,
    postMessage
};