import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Menim sehifem");
});

export default router;
