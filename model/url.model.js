const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true
    },
    originalUrl: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    })

module.exports = mongoose.model("Url", urlSchema)