const User = require('../models/User')

module.exports = class UsersController {

  getAll() {
    return new Promise((resolve, reject) => {
      User.find((err, users) => {
        resolve(users.map(user => user.toObject()));
      });
    });
  }

  getOne(id) {
    return new Promise((resolve, reject) => {
      const user = User.findById((u) => u.id === id);
      if (user) {
        resolve(user);
      } else {
        reject(new Error('User not found'));
      }
    });
  }

  create(user) {
    return User.create(user);
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      users = users.filter((u) => !(u.id === id));
      resolve(true);
    });
  }
}
