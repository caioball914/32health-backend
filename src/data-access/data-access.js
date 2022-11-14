const admin = require('firebase-admin');

const getData = (url) => {
  return admin.database().ref(url);
}

module.exports = { getData };