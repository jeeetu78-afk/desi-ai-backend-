const express = require("express");
const app = express();

// 🔥 MOST IMPORTANT LINE
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🤖 Desi AI Backend is running!");
});

app.post("/chat", (req, res) => {
  const { message } = req.body;

  // ✅ Proper validation
  if (!message || message.trim() === "") {
    return res.status(400).json({
      error: "Message is required"
    });
  }

  res.json({
    reply: `🤖 Desi AI bolta hai: ${message}`
  });
});

// Render PORT
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
