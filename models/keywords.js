const mongoose = require('mongoose');

const Schema = mongoose.Schema;

keywordSchema = new Schema({
            keyword: {type: String, unique:true, required: true}
});

module.exports = mongoose.model('Keyword', keywordSchema);