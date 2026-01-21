import express from "express";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 10000;

app.get("/", (req, res) => {
  res.send("🤖 Desi AI is LIVE (Free Mode)");
});

app.post("/chat", (req, res) => {
  const msg = req.body.message?.toLowerCase();

  if (!msg) {
    return res.status(400).json({ reply: "Kuch likho pehle 😅" });
  }

  let reply = "Samajh nahi aaya 🤔 thoda aur bolo";

  if (msg.includes("hello") || msg.includes("hi")) {
    reply = "नमस्ते दोस्त 👋 मैं Desi AI हूँ";
  } 
  else if (msg.includes("naam")) {
    reply = "मेरा नाम Desi AI है 🤖";
  } 
  else if (msg.includes("kaise ho")) {
    reply = "मैं बढ़िया हूँ 😊 तुम बताओ?";
  } 
  else if (msg.includes("bye")) {
    reply = "फिर मिलेंगे 👋 ध्यान रखना";
  }

  res.json({ reply });
});

app.listen(PORT, () => {
  console.log("Desi AI running on port", PORT);
});
