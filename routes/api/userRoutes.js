// imports
const router = require('express').Router();

// functions written in user-controller.js
const {
  getUsers,
  getUserById,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  deleteFriend
} = require('../../controllers/user-controller');

// /api/users
// GET and POST route for users
router.route('/').get(getUsers).post(createUser);

// /api/users/:userId
// GET, PUT, DELETE route for users
router.route('/:userId').get(getUserById).put(updateUserById).delete(deleteUserById);

// /api/users/:userId/friends/:friendId
// POST and DELETE route for user's friends list
router.route('/:userId/friends/:friendId').post(addFriend).delete(deleteFriend);

module.exports = router;