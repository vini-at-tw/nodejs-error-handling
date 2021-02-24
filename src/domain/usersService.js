const UserNotFoundError = require("../core/errors/userNotFoundError");

const users = [
  { id: 1, name: "Vini" },
  { id: 2, name: "Diego" },
];

function getUserById(userId) {
  return new Promise((resolve, reject) => {
    const user = users.find((user) => user.id === userId);

    if (!user) {
      const userNotFoundError = new UserNotFoundError(
        `Does not found user with given id=${userId}`
      );
      reject(userNotFoundError);
    }
    resolve(user);
  });
}

function getUsers() {
  return users;
}

module.exports = {
  getUsers,
  getUserById,
};
