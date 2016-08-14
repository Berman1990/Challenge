module.exports = {
  /*
  * The MongoDB URL
  * */
  MONGO_URI: process.env.MONGOLAB_URI || process.env.MONGO_URI || 'mongodb://104.46.36.200:27017/dropit-LogServer'
};