const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  User.beforeCreate(async (user, options) => {
    if (user.password) {
      const hashedPassword = await bcrypt.hash(user.password, 10); 
      user.password = hashedPassword;
    }
  });

  return User;
};
