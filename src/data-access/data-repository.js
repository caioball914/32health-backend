const { getData } = require('./data-access');

async function saveMockupData(data) {
  const dataRef = "mockupdata";
  return new Promise((resolve, reject) => {
    getData(dataRef).ref.update(data)
      .then((data) => resolve(true))
      .catch((error) => reject(false))
  })
}

async function getMockupData() {
  const collectionsRef = "mockupdata/";
  return new Promise((resolve, reject) => {
    getData(collectionsRef).ref.on('value', (data) => {
      if (data) { resolve(data.toJSON()) }
      reject(null);
    })
  })
}

module.exports = { saveMockupData, getMockupData };
