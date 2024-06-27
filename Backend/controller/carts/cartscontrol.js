const express = require("express");
const router = express.Router();
const service = require("../../services/carts/carts_services");
const ResponseManager = require("../../response/responseManager");
const multer = require("multer");
const fileuploader = require("../../Cloud/cloudinary");

// Configure multer for file upload
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to get cart
router.get("/getcart", async (req, res) => {
  try {
    const carts = await service.getcart();
    ResponseManager.sendSuccess(res, carts);
  } catch (err) {
    ResponseManager.sendError(res, err.message); // Sending error message using ResponseManager
  }
});

// Route to add cart
router.post("/addcart", upload.single("image"), async (req, res) => {
  try {
    if (!req.file) {
      throw new Error("No file uploaded"); // Handle case where no file is uploaded
    }

    const fileBuffer = req.file.buffer;
    const formData = req.body;

    // Upload image to cloudinary
    const imageUrl = await fileuploader.uploadMedia(fileBuffer);

    // Create new cart data with image URL
    const newCartData = { ...formData, image: imageUrl };

    // Add cart data to database
    const addedCart = await service.addcart(newCartData);

    ResponseManager.sendSuccess(res, addedCart);
  } catch (err) {
    ResponseManager.sendError(res, err.message); // Sending error message using ResponseManager
  }
});

// Route to update cart
router.put("/updatecart/:cart_id", async (req, res) => {
  try {
    const affectedRows = await service.updatecart(req.body, req.params.cart_id);
    if (affectedRows === 0) {
      return ResponseManager.sendError(res, "No record found", 404); // Adjusted to use sendError for not found case
    }
    ResponseManager.sendSuccess(res, "Update successful");
  } catch (err) {
    ResponseManager.sendError(res, err.message); // Sending error message using ResponseManager
  }
});

// Route to delete cart
router.delete("/deletecart/:cart_id", async (req, res) => {
  try {
    const affectedRows = await service.deletecart(req.params.cart_id);
    if (affectedRows === 0) {
      return ResponseManager.sendError(res, "No record found", 404); // Adjusted to use sendError for not found case
    }
    ResponseManager.sendSuccess(res, "Delete successful");
  } catch (err) {
    ResponseManager.sendError(res, err.message); // Sending error message using ResponseManager
  }
});

module.exports = router;
