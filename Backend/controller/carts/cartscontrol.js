const express = require("express");
const router = express.Router();
const service = require("../../services/carts/carts_services");
const ResponseManager = require("../../response/responseManager");
const multer = require("multer");
const fileuploader = require("../../Cloud/cloudinary");
//const uploadfile = require("../../cloud/upload")

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Route to get cart data
router.get("/getcart", async (req, res) => {
  try {
    const carts = await service.getcart();
    ResponseManager.sendSuccess(res, carts);
  } catch (error) {
    ResponseManager.sendError(res, error.message);
  }
});

// Route to add a new cart item
router.post("/addcart", upload.single("image"), async (req, res) => {
  try {
    const fileBuffer = req.file.buffer;
    const formData = req.body;

    // Upload file to cloudinary and get imageUrl
    const imageUrl = await fileuploader.uploadMedia(fileBuffer);

    // Construct new cart data with imageUrl
    const newCartData = { ...formData, image: imageUrl };

    // Add cart data to database
    const addedCart = await service.addcart(newCartData);

    ResponseManager.sendSuccess(res, addedCart);
  } catch (error) {
    ResponseManager.sendError(res, error.message);
  }
});

// Route to update an existing cart item
router.put("/updatecart/:cart_id", async (req, res) => {
  try {
    const affectedRows = await service.updatecart(req.body, req.params.cart_id);
    if (affectedRows === 0) {
      return ResponseManager.sendError(res, "No record found with that ID", 404);
    }
    ResponseManager.sendSuccess(res, "Update successful");
  } catch (error) {
    ResponseManager.sendError(res, error.message);
  }
});

// Route to delete a cart item
router.delete("/deletecart/:cart_id", async (req, res) => {
  try {
    const affectedRows = await service.deletecart(req.params.cart_id);
    if (affectedRows === 0) {
      return ResponseManager.sendError(res, "No record found with that ID", 404);
    }
    ResponseManager.sendSuccess(res, "Delete successful");
  } catch (error) {
    ResponseManager.sendError(res, error.message);
  }
});

module.exports = router;
