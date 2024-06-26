const express = require("express");
const router = express.Router();
const service = require("../services/login/loginpage_services");
const ResponseManager = require("../response/responseManager");



// Retrieve a list of all logins.
// GET http://localhost:3000/login/getAlllogin
// router.get("/getAlllogin", async (req, res) => {
//   try {
//     const logins = await service.getAlllogin();
//     ResponseManager.sendSuccess(res, logins);
//   } catch (error) {
//     ResponseManager.sendError(res, error); // Handle error using ResponseManager
//   }
// });

// Add a new login to the database.
// POST http://localhost:3000/login/addlogin
router.post("/addlogin", async (req, res) => {
  try {
    const affectedRows = await service.addlogin(req.body);
    if (affectedRows === 0) {
      // If no rows affected (assuming it's an error condition)
      ResponseManager.sendError(res, "No record added");
    } else {
      ResponseManager.sendSuccess(res, "Login created successfully");
    }
  } catch (error) {
    ResponseManager.sendError(res, error); // Handle error using ResponseManager
  }
});

module.exports = router;
