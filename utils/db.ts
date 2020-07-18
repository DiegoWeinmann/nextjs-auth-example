import mongoose from 'mongoose';
import mongodb from 'mongodb';

const MONGO_URI = 'mongodb://localhost:27017';

async function connectDb() {
  // 0 -> disconnected
  if (mongoose.connections[0].readyState) {
    console.log(
      `Mongo db is up and running using [database:${mongoose.connections[0].db.databaseName}] [readyState:${mongoose.connections[0].readyState}]`
    );
    return;
  }
  try {
    await mongoose.connect(`${MONGO_URI}/testing`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log('Mongodb connected.');
  } catch (err) {
    if (err instanceof mongodb.MongoError) {
      console.log('Process finished due to Mongodb error: ', err.name);
      console.log(err.message);
    }
    process.exit(1);
  }
}

export { connectDb };
