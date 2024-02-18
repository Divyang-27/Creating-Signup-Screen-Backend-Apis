const User = require('../models/user');

exports.signupUser = async (req, res, next) => {
  if (req.body.name === '' || req.body.mail === '' || req.body.pw === '') {
    return res.status(400).json({ error: 'Something is missing' });
  }
  try {
    await User.create(req.body);
    res.status(200).send({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).send({ error: 'User already exists' });
  }
};
