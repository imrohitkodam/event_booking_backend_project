
const Event = require("../Models/event.js");



async function handleCreateNewEvent(req, res) {
  try {
    console.log("Body:", req.body);
    console.log("File:", req.file); // multer puts the uploaded file here

    const {
      title,
      location,
      description,
      startDate,
      endDate,
      bookingStartDate,
      bookingEndDate,
    } = req.body;

    const image = req.file ? req.file.filename : ""; // ✅ get filename from multer

    const newEvent = await Event.create({
      title,
      location,
      description,
      startDate,
      endDate,
      image,
      bookingStartDate,
      bookingEndDate,
    });

    res.status(201).json({
      message: "Event created successfully",
      eventId: newEvent._id,
      event: newEvent,
    });
  } catch (error) {
    console.error("Error creating event:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}



module.exports={

    // handleGetAllProducts,
    // handleGetProductById,
    // handleUpdateProductById,
    // handleDeleteProductByID,
    handleCreateNewEvent
}

