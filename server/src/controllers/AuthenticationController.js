// This file will be responsible for handling the authentication logic on the server
const {User} = require('./../models')
module.exports = {
  async register (req, res) {
    try {
      await User.create(req.body)
      return res.send({
        message: 'The user has been created!'
      })
    } catch (err) {
      return res.status(400).send({
        message: 'This email has already been used'
      })
    }
  },

  async login (req, res) {
    try {
      const {email, password} = req.body
      const user = await User.findOne({
        where: {
          email: email
        }
      })
      if (!user) {
        return res.status(403).send({
          message: 'The login information was not correct'
        })
      }
      const passwordValid = password === user.password
      if (!passwordValid) {
        return res.status(403).send({
          message: 'The login information was not correct'
        })
      }

      return res.send({
        message: 'SUCCESS'
      })
    } catch (err) {
      res.status(500).send({
        message: 'An error has occured'
      })
    }
  }
}
