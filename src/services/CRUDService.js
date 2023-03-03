const connection = require("../config/database");
const getAllUsers = async () => {
  let [results, fields] = await connection.query("select * from Users");
  //   console.log(">>> check rows: ", results);
  return results;
};

module.exports = {
  getAllUsers,
};
