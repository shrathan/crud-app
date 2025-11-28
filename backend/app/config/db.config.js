module.exports = {
  url: process.env.MONGO_URI || `mongodb://root:password@mongo:27017/crud-db?authSource=admin`
};
console.log("Connecting to MongoDB at:", module.exports.url);

