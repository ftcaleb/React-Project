// backend/routes.js
import express from "express";
import { supabase } from "./supabase.js";

const router = express.Router();

/**
 * POST /api/bookings
 * Create a new booking
 */
router.post("/bookings", async (req, res) => {
  try {
    const { fullname, email, phone, date, time, service, duration } = req.body;

    if (!fullname || !email || !phone || !date || !time || !service) {
      return res.status(400).json({ error: "Missing required fields." });
    }

    // Check if slot is already booked
    const { data: existing, error: checkError } = await supabase
      .from("bookings")
      .select("id")
      .eq("date", date)
      .eq("time", time)
      .eq("service", service)
      .limit(1);

    if (checkError) return res.status(500).json({ error: "Error checking availability." });
    if (existing && existing.length > 0) return res.status(409).json({ error: "Slot already booked." });

    // Insert booking
    const { data, error } = await supabase
      .from("bookings")
      .insert([{ fullname, email, phone, date, time, service, duration }])
      .select()
      .single();

    if (error) return res.status(500).json({ error: "Failed to create booking." });

    res.status(201).json({ booking: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error creating booking." });
  }
});

/**
 * GET /api/bookings
 * List all bookings
 */
router.get("/bookings", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("bookings")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) return res.status(500).json({ error: "Failed to fetch bookings." });

    res.status(200).json({ bookings: data });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error fetching bookings." });
  }
});

/**
 * GET /
 * Health check
 */
router.get("/", (req, res) => {
  res.json({ status: "ok", message: "Booking backend running" });
});

export default router;
