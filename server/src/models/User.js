module.exports = (sequelize, DataTypes) =>
  sequelize.define('User', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
	user_ID: {
		DataTypes:INTEGER,
		primaryKey:true
	},
    password: DataTypes.STRING
  })
