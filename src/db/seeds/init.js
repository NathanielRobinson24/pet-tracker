// A "seed" file is how we can pre-populate our database with data.
// This is useful for testing and development purposes.

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async (knex) => {
  // Deletes ALL existing entries (you can just use knex and delete everything)
  await knex('nathanielrobinson').del();
  // Now run your logic to create your resources with your models
  await knew('nathanielrobinson').insert({
    pet_name: 'Fluffy',
    pet_profile_picture_url: 'https://via.placeholder.com/150',
    species: 'Dog',
    is_friendly: true
  })
};
