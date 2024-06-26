const db = require("../../db");

class LoginService {
  async getClientByEmailANDPassword(email, password) {
    try {
      const [client] = await db.query(
        "SELECT * FROM login WHERE email = ? AND password = ?",
        [email, password]
      );
      return client || null; // Return null if no client found
    } catch (error) {
      console.error("Error fetching client by email and password:", error);
      throw error;
    }
  }

  async getClientById(id) {
    try {
      if (!client_id) {
        throw new Error("client_id is not valid");
      }

      const [clientData] = await db.query(
        "SELECT * FROM clients WHERE id = ?",
        [client_id]
      );
      return clientData || null;
    } catch (error) {
      console.error("Error fetching client by ID:", error);
      throw error;
    }
  }
}

module.exports = new LoginService();
