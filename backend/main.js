const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
const apiRoutes = require('./routes/api');

app.use(express.json());
app.use(cors());

try {
    mongoose.connect(process.env.MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log("Connected to MongoDB");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}



const PORT = process.env.PORT || 3001;

app.use('/api', apiRoutes);

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
});
