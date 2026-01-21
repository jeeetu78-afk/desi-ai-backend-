const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("🚀 Desi AI Backend is running!");
});

// Fake AI reply (demo)
app.post("/chat", (req, res) => {
  const userMsg = req.body.message || "";

  res.json({
    reply: `🤖 Desi AI bol raha hai: "${userMsg}" ka reply baad me smart banega 😄`
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
