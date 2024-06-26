const db = require('../../db');

// Function to get all login records
module.exports.getAlllogin = async () => {
  try {
    const [rows] = await db.query('SELECT * FROM login');
    return rows;
  } catch (error) {
    throw error; // Throw error to be caught by caller
  }
};

// Function to add a new login record
module.exports.addlogin = async (newLogin) => {
  try {
    const [result] = await db.query('INSERT INTO login SET ?', newLogin);
    return result.affectedRows; // Return number of affected rows
  } catch (error) {
    throw error; // Throw error to be caught by caller
  }
};
