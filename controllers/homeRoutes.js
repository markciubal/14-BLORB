const router = require('express').Router();
const { User, Post } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  res.redirect('/browse');
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/create', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }
  res.render('create');
});

router.get('/post', withAuth, (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (!req.session.logged_in) {
    res.redirect('/');
    return;
  } else {
    res.render('post', {
        logged_in: req.session.logged_in
      });
  }
});

router.get('/browse', withAuth, async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
  } else {
      try {
      const postData = await Post.findAll({
        include: [
          {
            model: User
          }        
        ]
      });
      var current_user = req.session.user_id;
      const posts = postData.map((project) => project.get({ plain: true }));
      res.render('browse', {
        posts,
        logged_in: req.session.logged_in,
        current_user: current_user,
      });
    } catch (err) {
      res.status(500).json(err);
    }
  }
  
});

router.get('/update/:id', async (req, res) => {
  if (!req.session.logged_in) {
    res.redirect('/');
  } else {
    try {
      const post = await Post.findByPk(req.params.id, {
        raw: true
      });
      // const users = userData.map((project) => project.get({ plain: true }));
      console.log(post);
      res.render('update', {
        post,
      });
      console.log("Success, kind of.");
    } catch (error) {
      res.status(500).json(error);
    }
  }
});
module.exports = router;