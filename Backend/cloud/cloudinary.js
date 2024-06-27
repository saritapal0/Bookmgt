// cloudinary.js
const cloudinary = require('cloudinary').v2;
require('dotenv').config(); // if you use environment variables

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadMedia = async (fileBuffer) => {
  try {
    const uploadedImage = await cloudinary.uploader.upload_stream({
      resource_type: 'image',
      folder: 'carts' // Optional: Change the folder name as per your requirement
    }, (error, result) => {
      if (error) {
        throw new Error('Failed to upload image to Cloudinary');
      }
      return result.secure_url; // Return the secure URL of the uploaded image
    });

    fileBuffer.pipe(uploadedImage); // Pipe the file buffer to Cloudinary uploader
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = { uploadMedia };
