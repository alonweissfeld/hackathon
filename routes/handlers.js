const {getAllIntentNamesAndCurrentAnswers, changeIntentAnswerByName} = require('../utils');

const getAllIntents = (req, res) => {
    getAllIntentNamesAndCurrentAnswers()
        .then(response => {
            console.log(JSON.stringify(response));
            res.json(response)
        });
};

const updateIntentByName = (req, res) => {
    const {name, newMessage} = req.body;
    changeIntentAnswerByName(name, newMessage)
        .then(response => {
            res.json(response)
        })
        .catch(err => res.json(err));
};

const handleIntents = (req, res) => {
    console.log(req.body);

    res.json({
            speech: `Your question was ${req.body.result.resolvedQuery}`});
};

module.exports = {getAllIntents, updateIntentByName, handleIntents};