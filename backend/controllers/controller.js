const Data = require('../models/model');

exports.getData = async (req, res) => {
    try {
        // Try fetching data from the MongoDB database
        const databaseData = await Data.find({});
        res.json(databaseData);
    } catch (error) {
        // If there's an error in fetching data from the database, log the error
        console.error(error);
        // Send an error response to the client if needed
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
