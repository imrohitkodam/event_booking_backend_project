const express = require("express");
const path = require("path");
const multer = require("multer");
const { handleCreateNewEvent} = require("../Controllers/event.js");


const router = express.Router();


// 📁 Configure storage for uploaded files
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/"); // make sure this folder exists
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + "-" + file.originalname);
    },
  });
  
  const upload = multer({ storage });
// This for APi Products
// router.route("/")
// // .get(handleGetAllProducts)
// .post(handleCreateNewEvent)

// 📌 Route with multer middleware
router.post("/", upload.single("image"), handleCreateNewEvent);


// router.route("/:id")
// .get(handleGetProductById)
// .put(handleUpdateProductById)
// .delete(handleDeleteProductByID)


module.exports = router;


