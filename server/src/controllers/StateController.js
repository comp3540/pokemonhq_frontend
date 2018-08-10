// This file will be responsible for handling the authentication logic on the server
const User = require('./../models/User');
module.exports = {
  async save (req, res) {
    try {
      const user = await User.findOne({ email: req.user.email });
      user.states.push(req.body);
      await user.save();
      return res.status(200).send({
        message: 'Your state has been successfully uploaded'
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        message: 'There was an error uploading your state...'
      });
    }
  },
  async get (req, res) {
    try {
      const user = await User.findOne({email: req.user.email});
      return res.status(200).send({
        state: user.states.pop()
      });
    } catch (err) {
      console.log(err);
      return res.status(500).send({
        message: 'There was an error fetching your state...'
      });
    }
  }
};
