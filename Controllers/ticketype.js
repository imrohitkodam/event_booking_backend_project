const Ticket = require("../Models/ticketype.js");

async function handleCreateTickets(req, res) {
  try {
    const tickets = req.body.tickets;

    const cleanedTickets = tickets.map(ticket => {
      return {
        ...ticket,
        seatsCount: ticket.seatsCount || null,
        remainingSeats: ticket.remainingSeats || null,
      };
    });

    const result = await Ticket.insertMany(cleanedTickets);
    res.status(201).json({ message: "Tickets created", data: result });
  } catch (error) {
    console.error("❌ Error creating tickets:", error);
    res.status(500).json({ message: "Failed to create tickets" });
  }
}

module.exports={

    handleCreateTickets,
}