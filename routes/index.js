const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/api/authenticate', function(req, res) {
  User.findOne({email: req.body.email, password: req.body.password},
    function(err, user) {
      if (err)
        return res.status(500).json(err);

      if (user)
        return res.status(200).json(user);
      else
        return res.status(500).json({error: 'User not found.'});
  });
});

router.put('/api/register', function(req, res) {
  User.findOne({email: req.body.email}).then(function(err, user) {
    if (err)
      return res.status(500).json(err);

    if (user)
      return res.status(500).json({error: 'User already exists.'});
    else {
      let user = new User({
        email: req.body.email,
        password: req.body.password
      });

      user.save(function(err) {
        if (err)
          return res.status(500).json(err);
        else
          return res.status(200).json(user);
      });
    }
  });
});

module.exports = router;
