const express = require('express');
const router = express.Router();

const { saveMockupData, getMockupData } = require('./data-access/data-repository');

router.use((req, res, next) => {
  next();
});

router.get('/', (req, res) => {
  res.json({
    message: 'Home',
  });
});

router.get('/get-mockup-data', async (req, res) => {
  const data = await getMockupData();
  if (data) {
    res.status(200).send(data);
  } else {
    res.status(503).send('Error has occurred during saving data in database');
  }
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
