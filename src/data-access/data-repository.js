const { getData } = require('./data-access');

async function saveMockupData(data) {
  const dataRef = "mockupdata";
  return new Promise((resolve, reject) => {
    getData(dataRef).ref.update(data)
      .then((data) => resolve(true))
      .catch((error) => reject(false))
  })
}

module.exports = { saveMockupData };
