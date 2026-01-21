const express = require("express");
const app = express();

// VERY IMPORTANT
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("🤖 Desi AI is alive!");
});

// Chat route
app.post("/chat", (req, res) => {
  const userMessage = req.body.message;

  if (!userMessage) {
    return res.status(400).json({
      error: "Message missing"
    });
  }

  res.json({
    reply: "Desi AI bolta hai: " + userMessage
  });
});

// Render port fix
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
