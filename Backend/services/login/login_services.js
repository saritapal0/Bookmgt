const db = require("../../db");

class LoginService {
  async getClientByEmailANDPassword(email, password) {
    try {
      const [login] = await db.query(
        "SELECT * FROM login WHERE email = ? AND password = ?",
        [email, password]
      );
      return login || null; // Return login or null if not found
    } catch (error) {
      console.error("Error fetching user by email and password:", error);
      throw error;
    }
  }

  async getUserById(id) {
    try {
      if (!id) {
        throw new Error("ID is not valid");
      }

      const [loginData] = await db.query(
        "SELECT * FROM login WHERE id = ?",
        [id]
      );
      console.log('data2', loginData);
      return loginData || null;
    } catch (error) {
      console.error("Error fetching user by ID:", error);
      throw error;
    }
  }
}

module.exports = new LoginService();
