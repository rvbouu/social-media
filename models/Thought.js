// imports
const {Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction');
// npm library for date formatting
const moment = require('moment');

// thoughtSchema
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => moment(timestamp).format('MMMM Do YYYY, h:mm:ss a')
    },
    username: {
      type: String,
      required: true
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true
    },
    id: false
  }
);

// increase reactionCount when reactions are added to a thought
thoughtSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

// create Thought model with thoughtSchema
const Thought = model('thought', thoughtSchema);

// exports
module.exports = Thought;