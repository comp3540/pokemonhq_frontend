const Promise = require('bluebird')
const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

function hashPassword (user, option) {
  const SALT_FACTOR = 8

  if (!user.changed('password')) {
    return
  }
  return bcrypt.genSaltAsync(SALT_FACTOR).then(salt => bcrypt.hasAsync(user.password, salt, null)).then(hash => { user.setDataValue('password', hash) })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeSave: hashPassword,
      beforeUpdate: hashPassword
    }
  })
  User.prototype.comparePassword = function (password) {
    return bcrypt.compareAsync(password, this.password)
  }
  return User
}
