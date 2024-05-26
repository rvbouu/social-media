// imports
const { Schema, Types} = require('mongoose');
// npm library for date formatting
const moment = require('moment');

// not a model: reaction field's sub-document schema in the Thought model 
const reactionSchema = new Schema(
  {
    reactionId:{
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280
    },
    username: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')
    }
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

// exports
module.exports = reactionSchema;