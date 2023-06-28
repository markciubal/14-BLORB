const router = require('express').Router();
const { Comment, User } = require('../../models');

router.post('/create', async (req, res) => {
  try {
    const authorId = await User.findByPk(req.session.user_id, {
      raw: true
    })
    const newComment = await Comment.create({
      comment: req.body.comment,
      post_id: req.body.post_id,
      user_id: req.session.user_id
    });
    res.status(200).json("Successfully commented.");
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
