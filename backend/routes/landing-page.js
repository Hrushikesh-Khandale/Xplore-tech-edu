const express = require('express');
const LandingPage = require('../models/LandingPage');

const router = express.Router();

// Fetch landing page data
router.get('/', async (req, res) => {
  const landingPage = await LandingPage.findOne();
  if (!landingPage) {
    return res.status(404).send('Landing page not found');
  }
  res.json(landingPage);
});

// Create new landing page
router.post('/', async (req, res) => {
  const landingPageData = req.body;
  const newLandingPage = new LandingPage(landingPageData);
  await newLandingPage.save();
  res.status(201).json({ message: 'Landing page created' });
});

// Update landing page data
router.put('/', async (req, res) => {
  const landingPageData = req.body;
  const existingLandingPage = await LandingPage.findOne();

  if (!existingLandingPage) {
    return res.status(404).send('Landing page not found');
  }

  existingLandingPage.heroTitle = landingPageData.heroTitle;
  existingLandingPage.heroDescription = landingPageData.heroDescription;
  existingLandingPage.aboutContent = landingPageData.aboutContent;
  existingLandingPage.contactForm.name = landingPageData.contactForm.name;
  existingLandingPage.contactForm.email = landingPageData.contactForm.email;
  existingLandingPage.contactForm.message = landingPageData.contactForm.message;

  await existingLandingPage.save();
  res.status(200).send({ message: 'Landing page updated' });
});

// Delete landing page data
router.delete('/:id', async (req, res) => {
  const landingPageId = req.params.id;
  const landingPage = await LandingPage.findByIdAndDelete(landingPageId);

  if (!landingPage) {
    return res.status(404).send('Landing page not found');
  }

  res.status(200).send({ message: 'Landing page deleted' });
});

module.exports = router;
