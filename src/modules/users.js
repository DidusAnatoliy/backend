const fs = require("fs");
const path = require("path");

const getUsers = () => {
  const firePath = path.join(__dirname, "../data/users.json");
  return fs.readFileSync(firePath);
};
module.exports = getUsers;