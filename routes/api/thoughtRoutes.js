// imports
const router = require('express').Router();

// functions written in thought-controller.js
const {
  getThoughts,
  getThoughtById,
  createThought,
  updateThoughtById,
  deleteThoughtById,
  addReaction,
  deleteReaction
} = require('../../controllers/thought-controller');

// /api/thoughts
// GET and POST route for thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/thoughts/:thoughtId
// GET, PUT, DELETE route for thoughts
router.route('/:thoughtId').get(getThoughtById).put(updateThoughtById).delete(deleteThoughtById);

// /api/thoughts/:thoughtId/reactions
// POST route for thought reactions
router.route('/:thoughtId/reactions').post(addReaction);

// /api/thoughts/:thoughtId/reactions/:reactionId
// DELETE route for thought reactions
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// exports
module.exports = router;