const router = require('express').Router();
const { Post, User } = require('../../models');
const { update } = require('../../models/User');

router.get('/', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const postData = await Post.findAll();

    if (!postData) {
      res
        .status(400)
        .json({ message: 'No posts! Check back later.' });
      return;
    } else {
      return res.status(200).json(postData);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const postData = await Post.findByPk(req.params.id);

    if (!postData) {
      res
        .status(400)
        .json({ message: 'No posts! Check back later.' });
      return;
    } else {
      return res.status(200).json(postData);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/user/:id', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const postData = await Post.findAll({
      include: [
        {
          model: User
        }        
      ],
      where: {
        user_id: req.params.id
      },
      attributes: { exclude: ['password', 'user_id'] },
    });

    if (!postData) {
      res
        .status(400)
        .json({ message: 'No posts! Check back later.' });
      return;
    } else {
      return res.status(200).json(postData);
    }
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/create', async (req, res) => {
   try {
    const newPost = await Post.create({
      title: req.body.title,
      body: req.body.body,
      user_id: req.session.user_id
    });
    res.status(200).json("Successfully created post.");
  } catch (err) {
    res.status(400).json(err);
  }
})

router.patch('/update', async (req, res) => {
  console.log(req.session.user_id);
  console.log(req.body.id);
    const post = await Post.findByPk(req.body.id, {
      raw: true
  });
  if (post.user_id === req.session.user_id) {
    try {
      let updateData = await Post.update({
        title: req.body.title,
        body: req.body.body,
      }, {
        where: {
          id: req.body.id
        }
      });
      console.log('test', updateData);
      res.status(200).json("Successfully updated post.");
    } catch (err) {
      res.status(400).json(err);
    }
  }
})

router.delete('/delete', async (req, res) => {
  console.log("id", req.body.id);
  const post = await Post.findByPk(req.body.id, {
    raw: true
  });
  if (post.user_id === req.session.user_id) {
    try {
      let deletePost = await Post.destroy({
        where: {
          id: req.body.id
        }
      });
      res.status(200).json("Successfully updated post.");
    } catch (err) {
      res.status(400).json(err);
    }
  }
})

module.exports = router;
