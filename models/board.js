var mongoose = require('mongoose')
        , Schema = mongoose.Schema;

var BoardSchema = mongoose.Schema({
    user1: {type: Schema.ObjectId, ref: 'User'},
    user2: {type: Schema.ObjectId, ref: 'User'},
    winner: {type: Schema.ObjectId, ref: 'User'},
    lost: {type: Schema.ObjectId, ref: 'User'},
    createdAt: {type: Date, default: Date.now},
    result: String
});

mongoose.model('Board', BoardSchema);