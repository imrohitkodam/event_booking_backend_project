const express = require("express");
const { handleCreateTickets} = require("../Controllers/ticketype.js");


const router = express.Router();


// This for APi Products
router.route("/")
// .get(handleGetAllProducts)
.post(handleCreateTickets)



module.exports = router;
