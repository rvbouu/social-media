// imports
const { User, Thought } = require('../models');

// exports
module.exports = {
  // GET all users
  // /api/users
  async getUsers(req, res) {
    try {
      const users = await User.find()
        .populate({ path: 'thoughts', select: '-__v' })
        .populate({ path: 'friends', select: '-__v' });

      return res.status(200).json(users);
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // GET single user by _id
  // /api/users/:userId
  async getUserById(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
        .populate({ path: 'thoughts', select: '-__v' })
        .populate({ path: 'friends', select: '-__v' });

      if (!user) {
        return res.status(404).json({ msg: 'No user found with that ID.' });
      }

      return res.status(200).json(user);
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Create (POST) a new user
  // /api/users
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);

      return res.status(200).json(user);
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Update (PUT) a user by _id
  // /api/users/:userId
  async updateUserById(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ msg: 'No user found with that ID.' });
      }

      return res.status(200).json(user)
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // DELETE a user by _id
  // /api/users/:userId
  async deleteUserById(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ msg: 'No user found with that ID.' });
      }

      // BONUS: DELETE user's associated thoughts
      await Thought.deleteMany({ _id: { $in: user.thoughts } });

      return res.status(200).json({ msg: 'User and their associated thoughts and reactions have been deleted.' })
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Add (POST) new friend to user's friends list
  // /api/users/:userId/friends/:friendId
  async addFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res.status(404).json({ msg: 'No user found with that ID.' });
      }

      return res.status(200).json(friend); 
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Remove (DELETE) friend from user's friends list
  // /api/users/:userId/friends/:friendId
  async deleteFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        { runValidators: true, new: true }
      );

      if (!friend) {
        return res.status(404).json({ msg: 'No user found with that ID.' });
      }

      return res.status(200).json(friend); 
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
}