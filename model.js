var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var dataSchema = new Schema({
  name: {
    type: String, required: true
  }
});

var Data = mongoose.model("Data", dataSchema);

module.exports = Data;
