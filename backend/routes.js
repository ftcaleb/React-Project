import express from "express";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

// In-memory storage (resets on server restart)
const bookings = [];

// Validate booking payload
function validateBookingPayload(payload) {
  const { fullname, email, phone, date, time, service } = payload;

  if (!fullname || !email || !phone || !date || !time || !service) {
    return { ok: false, message: "Missing required fields." };
  }

  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return { ok: false, message: "Invalid date format." };
  }

  return { ok: true };
}

// CREATE BOOKING — POST /api/bookings
router.post("/bookings", (req, res) => {
  try {
    const payload = req.body;

    const validation = validateBookingPayload(payload);
    if (!validation.ok) {
      return res.status(400).json({ error: validation.message });
    }

    const { fullname, email, phone, date, time, service, duration } = payload;

    // Check if slot already booked
    const conflict = bookings.find(
      (b) => b.date === date && b.time === time && b.service === service
    );

    if (conflict) {
      return res.status(409).json({ error: "Slot already booked." });
    }

    const newBooking = {
      id: uuidv4(),
      fullname,
      email,
      phone,
      date,
      time,
      service,
      duration: duration || null,
      createdAt: new Date().toISOString(),
    };

    bookings.push(newBooking);

    return res.status(201).json({
      message: "Booking created successfully",
      booking: newBooking,
    });

  } catch (err) {
    console.error("Error creating booking:", err);
    return res.status(500).json({ error: "Server error creating booking." });
  }
});

// GET ALL BOOKINGS — GET /api/bookings
router.get("/bookings", (req, res) => {
  try {
    const sorted = [...bookings].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    return res.status(200).json({ bookings: sorted });
  } catch (err) {
    console.error("Error fetching bookings:", err);
    return res.status(500).json({ error: "Server error fetching bookings." });
  }
});

// HEALTH CHECK
router.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "Booking backend running (in-memory storage)"
  });
});

export default router;