const mongoose = require("mongoose");

const LandingPageSchema = new mongoose.Schema({
  heroTitle: { type: String, required: true },
  heroDescription: { type: String, required: true },
  aboutContent: { type: String, required: true },
  contactForm: {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
});

const LandingPage = mongoose.model("LandingPage", LandingPageSchema);

module.exports = LandingPage;
