const multer = require("multer");
const path = require("path");

const userStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/user");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const categoryStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/category");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const productStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./upload/product");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + uniqueSuffix + ext);
  },
});

const maxSize = 5 * 1024 * 1024;

const userUpload = multer({
  storage: userStorage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext == ".jpg" || ext == ".jpeg" || ext == ".png") {
      cb(null, true);
    } else {
      const error = {
        message: "filetype not supported",
      };
      cb(error, false);
    }
  },
  limits: { fileSize: maxSize },
});

const categoryUpload = multer({
  storage: categoryStorage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext == ".jpg" || ext == ".jpeg" || ext == ".png") {
      cb(null, true);
    } else {
      const error = {
        message: "filetype not supported",
      };
      cb(error, false);
    }
  },
  limits: { fileSize: maxSize },
});

const productUpload = multer({
  storage: productStorage,
  fileFilter: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext == ".jpg" || ext == ".jpeg" || ext == ".png") {
      cb(null, true);
    } else {
      const error = {
        message: "filetype not supported",
      };
      cb(error, false);
    }
  },
  limits: { fileSize: maxSize },
});

module.exports = {
  userUpload,
  categoryUpload,
  productUpload
};
