const mongoose = require('mongoose');


const MovieSchema  = new mongoose.Schema({
    name: {
        required: true,
        type: String
    },
    watched:{
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Movie', MovieSchema);