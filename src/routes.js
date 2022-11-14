const express = require('express');
const router = express.Router();

const { saveMockupData } = require('./data-access/data-repository');

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res) => {
  res.json({
    message: 'Home',
  });
});

router.post('/save-mockup-data', async (req, res) => {
  const reqData = req?.body;
  if (reqData) {
    const isSavedData = await saveMockupData(reqData);
    if (isSavedData) {
      res.status(200).send('Success');
    } else {
      res.status(503).send('Error has occurred during saving data in database');
    }
  }
});

module.exports = router;
