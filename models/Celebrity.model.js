//  Add your code here
const {Schema, model, default: mongoose} = require("mongoose");

const celebritySchema = new Schema({
    name: String,
    occupation: String,
    catchPhrase: String,
});

const Celebrity = model("Celebrity", celebritySchema);

module.exports = Celebrity;