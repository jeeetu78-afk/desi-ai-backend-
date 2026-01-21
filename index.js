import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Test route
app.get("/", (req, res) => {
  res.send("🤖 Desi AI is alive!");
});

// AI chat route (FAKE AI for now)
app.post("/chat", async (req, res) => {
  const userMsg = req.body.message;

  if (!userMsg) {
    return res.status(400).json({ error: "Message missing" });
  }

  // Temporary AI reply
  const reply = `Desi AI bolta hai: "${userMsg}" ka jawab jald aayega 😄`;

  res.json({
    reply
  });
});

app.listen(PORT, () => {
  console.log("Desi AI running on port", PORT);
});
