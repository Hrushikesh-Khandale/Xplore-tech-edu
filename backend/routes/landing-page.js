const express = require('express');
const router = express.Router();
const LandingPage = require('../models/LandingPage');

// Route 1:Get landing page
router.get('/get-landing-page', async (req, res) => {
  try {
    const landingPage = await LandingPage.findOne();
    res.json(landingPage);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Route 2:Create landing page
router.post('/create-landing-page', async (req, res) => {
  try {
    const landingPage = new LandingPage(req.body);
    await landingPage.save();
    res.json(landingPage);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Route 3:Update landing page
router.put('/update-landing-page', async (req, res) => {
  try {
    const landingPage = await LandingPage.findOne();
    landingPage.set(req.body);
    await landingPage.save();
    res.json(landingPage);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

// Route 4:Delete landing page
router.delete('/delete-landing-page', async (req, res) => {
  try {
    await LandingPage.deleteOne();
    res.send('Landing page deleted successfully');
  } catch (error) {
    console.error(error);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
