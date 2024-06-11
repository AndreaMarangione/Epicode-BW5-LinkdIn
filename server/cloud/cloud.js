const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

const linkedInPostCloudStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'LinkedIn Post Images',
        format: async (req, file) => 'png',
        public_id: (req, file) => file.originalname
    }
})

const linkedInUsersCloudStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'LinkedIn Users Images',
        format: async (req, file) => 'png',
        public_id: (req, file) => file.originalname
    }
})

const linkedInPostCloudUpload = multer({ storage: linkedInPostCloudStorage });
const linkedInUsersCloudUpload = multer({ storage: linkedInUsersCloudStorage });

module.exports = { linkedInPostCloudUpload, linkedInUsersCloudUpload };
