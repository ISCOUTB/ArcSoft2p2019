const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({

    id:{
        type:Number,
    },
    username:{
        type:String,
    },
    followers:{
        type:Number
    },
    post:{
        type:Number
    }

});

module.exports = mongoose.model('Usuario',usuarioSchema);