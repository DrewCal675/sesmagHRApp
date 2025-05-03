const pool = require('../db');

const getAllUsers = async () => {
  const result = await pool.query('SELECT * FROM users');
  return result.rows;
};

const getUserById = async (id) => {
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
  return result.rows[0];
};

const updateUserField = async (id, field, newValue) => {
  const user = await getUserById(id);
  const oldValue = user[field];

  await pool.query(`UPDATE users SET ${field} = $1 WHERE id = $2`, [newValue, id]);
  await pool.query(
    `INSERT INTO user_changes (user_id, field_changed, old_value, new_value)
     VALUES ($1, $2, $3, $4)`,
    [id, field, oldValue, newValue]
  );
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUserField,
};
