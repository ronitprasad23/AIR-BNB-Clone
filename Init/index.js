const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../Models/listening.js");

const MONGO_DB = "mongodb://127.0.0.1:27017/Vacation-Villa";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_DB);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data =  initData.data.map((obj) => ({...obj, owner: "66059901328f0ed4258ea73c"}));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();