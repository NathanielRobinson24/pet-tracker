const knex = require('./knex');

class Pets {
  // This is just an example query, obviously you need to change it, but it shows you how to use knex.raw and dynamic values
  static async getAllPets() {
    try {
      const query = `SELECT * FROM nathanielrobinson`;
      const result = await knex.raw(query);
      console.log(reults)
      return result.row
    } catch (err) {
      console.error(err);
      return null;
    }
  }
}

module.exports = Pets;
