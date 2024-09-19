const User = require("../models/user");
const getText = (request, response) => {
  console.log("GET / route accessed");
  response.send("Hello,world");
};
// Получим всех пользователей из БД
const getUsers = (req, res) => {
  User.find({})
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
// Получим пользователя по ID
const getUser = (req, res) => {
  const { user_id } = req.params;
  User.findById(user_id)
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
// Создаем пользователя
const createUser = (req, res) => {
  const data = req.body;
  User.create(data)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(500).send(e.message);
    });
};
const updateUser = (request, response) => {
  //получение пользователя
};
const deleteUser = (request, response) => {
  //получение пользователя
};
module.exports = {
  getText,
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
};