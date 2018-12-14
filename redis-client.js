const redis = require('redis');
const client = redis.createClient({host: "redis-empty-dir-service"});
// const client = redis.createClient();
module.exports = client;