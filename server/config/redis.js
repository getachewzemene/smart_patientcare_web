let redis = require("redis");

let client = redis.createClient({
  url: "redis://localhost:6360",
});
client
  .connect()
  .then(() => {
    console.log("Redis connected success");
  })
  .catch((err) => {
    console.log("Redis Client Error", err);
  });
module.exports = client;
