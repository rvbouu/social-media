// imports
const { Schema, model } = require('mongoose');

// userSchema
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/, 'Please fill a valid email address']
    },
    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thought'
      }
    ],
    friends: [
      {
        type: Schema.Types.ObjectId,
        ref: 'user'
      }
    ]
  },
  {
    toJSON: {
      virtuals: true
    },
    id: false
  }
);

// increases friendCount when friends are added by a user
userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// creates a User model with userSchema
const User = model('user', userSchema);

// exports
module.exports = User;