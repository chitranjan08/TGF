var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * User Schema
 */
var gameSchema = new Schema({
  PlayerName: {
    type: String,
  },
  PlayerAge: {
    type: Number,
    min:18,
  },
  gameResult: {
    type: String,
   
  },
  userName:{
    type:String,
  },
  created: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Game', gameSchema);