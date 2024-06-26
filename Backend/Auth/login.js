const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const ResponseManager = require("../response/responseManager");
const loginService = require("../services/login/login_services"); // Corrected import

const secret_key = '12'; // Note: Avoid using such simple keys in production

router.post("/login", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const login = await loginService.getClientByEmailANDPassword(email, password); // Corrected usage
    if (login) {
      const loginData = {
        id: login.id,
        username: login.username,
        email: login.email,
        // Avoid sending password back to the client for security reasons
      };
      jwt.sign(
        { loginData },
        secret_key,
        { expiresIn: "2h" },
        (err, jwtToken) => {
          if (err) {
            console.error("Error generating token:", err);
            return ResponseManager.sendError(
              res,
              500,
              "ERR_GENERATING_TOKEN",
              "Error generating token"
            );
          }
          ResponseManager.sendSuccess(
            res,
            { login: loginData, jwtToken },
            200,
            "Login successful"
          );
        }
      );
    } else {
      throw new Error("Invalid credentials");
    }
  } catch (error) {
    console.error("Server error:", error);
    if (error.message === "Invalid credentials") {
      ResponseManager.sendError(
        res,
        401,
        "INVALID_CREDENTIALS",
        "Invalid email or password"
      );
    } else {
      ResponseManager.sendError(
        res,
        500,
        "SERVER_ERROR",
        "Internal server error"
      );
    }
  }
});

module.exports = router;
