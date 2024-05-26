const { User, Thought } = require('../models');

module.exports = {
  // GET all thoughts
  // /api/thoughts
  async getThoughts(req, res) {
    try {
      const thoughts = await Thought.find();

      return res.status(200).json(thoughts);
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // GET single thought by _id
  // /api/thought/:thoughtId
  async getThoughtById(req, res) {
    try {
      const thought = await Thought.findOne({ _id: req.params.thoughtId })

      if (!thought) {
        return res.status(404).json({ msg: 'No thought found with that ID.' });
      }

      return res.status(200).json(thought);
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Create (POST) a new thought
  // /api/thoughts
  async createThought(req, res) {
    try {
      const thought = await Thought.create(req.body);

      const user = await User.findOneAndUpdate(
        { _id: req.body.userId },
        { $addToSet: { thoughts: thought._id } },
        { runValidators: true, new: true }
      );

      return res.status(200).json(thought);
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Update (PUT) a thought by _id
  // /api/thoughts/:thoughtId
  async updateThoughtById(req, res) {
    try {
      const thought = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!thought) {
        return res.status(404).json({ msg: 'No thought found with that ID.' });
      }

      return res.status(200).json(thought)
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // DELETE a thought by _id
  // /api/thoughts/:thoughtId
  async deleteThoughtById(req, res) {
    try {
      const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

      if (!thought) {
        return res.status(404).json({ msg: 'No thought found with that ID.' });
      }

      return res.status(200).json({ msg: 'Thoughts and the associated reactions have been deleted.' })
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Add (POST) new reaction to single thought's reaction array
  // /api/thoughts/:thoughtId/reactions
  async addReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $addToSet: { reactions: req.body } },
        { runValidators: true }
      );

      if (!reaction) {
        return res.status(404).json({ msg: 'No thought found with that ID.' });
      }

      return res.status(200).json(reaction);
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },

  // Remove (DELETE) reaction
  // /api/thoughts/:thoughtId/reactions/:reactionId
  async deleteReaction(req, res) {
    try {
      const reaction = await Thought.findOneAndUpdate(
        { _id: req.params.thoughtId },
        { $pull: { reactions: { reactionId: req.params.reactionId } } },
        { runValidators: true, new: true }
      );

      if (!reaction) {
        return res.status(404).json({ msg: 'No thought found with that ID.' });
      }

      return res.status(200).json(reaction);
    }
    catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  }
}