var mongoose = require('mongoose');
  var Schema = mongoose.Schema;

  var blogSchema = new Schema({
    title:  String,
    image:  [String],
    author: String,
    authorId: String,
    body:   String,
    comments: [{ body: String, date: Date }],
    date: { type: Date, default: Date.now },
    favs:  Number
  });

  module.exports = mongoose.model('Post', blogSchema);
