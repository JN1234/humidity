const knex = require("./knex");

function createData(data) {
  return knex("data").insert(data);
}

function getData() {
  return knex("data").select("*");
}

function updateData(id, data) {
  return knex("data").where("id", id).update(data);
}

module.exports = {
  createData,
  getData,
  updateData,
};
