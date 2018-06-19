const {User} = require('./../models')
// const jwt = require('jsonwebtoken')
// const config = require('./../config/config')
module.exports = {
  async register (req, res) {
    try {
      await User.create(req.body)
      res.send({
        message: 'The user has been created!'
      })
    } catch (err) {
      res.status(400).send({
        message: 'This email has already been used'
      })
    }
  }
}
