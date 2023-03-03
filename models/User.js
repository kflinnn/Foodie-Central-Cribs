const { Model, DataTypes } = require('sequelize');
const argon = require('argon2');
const sequelize = require('../config/connection');
const validator = require('validator'); 

import argon2 from 'argon2'
import bcrypt from 'bcrypt'

router.post('/login', async ctx => {
  const { email, password } = ctx.request.body
  const user = await User.findOne({ email })
  
  // bcrypt hashes start with $2a$ or $2b$
  // argon2 hashes start with $argon2i$, $argon2d$ or $argon2id$
  if (user.password.startsWith('$2')) {
    const match = await bcrypt.compare(password, user.password)
    if (!match) {
      throw new Error('Unauthorized')
    }

    // rehash password with argon2
    user.password = await argon2.hash(password)
    await user.save()
  } else {
    const match = await argon2.verify(user.password, password)
    if (!match) {
      throw new Error('Unauthorized')
    }
  }
  // user is authorized and password is updated
})

//Needs id, username, password, email  - link user table to recipes
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user',
  }
);
var User = new loopback.model(User);
module.exports = User;
