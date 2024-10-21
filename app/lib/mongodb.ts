import { MongoClient } from 'mongodb';

const uri = process.env.MONGO_URL;

// Khởi tạo client MongoDB mà không cần các tùy chọn không cần thiết
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error('Add Mongo URI to .env.local');
}

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri); // Không cần options
    global._mongoClientPromise = client.connect().catch(err => {
      console.error('MongoDB connection error:', err);
      throw err; // Ném lại lỗi để xử lý
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(uri); // Không cần options
  clientPromise = client.connect().catch(err => {
    console.error('MongoDB connection error:', err);
    throw err;
  });
}

export default clientPromise;

// ............................................................................ //


// ................................................................................ //
import mongoose from "mongoose";

// Kết nối đến MongoDB
console.log("process.env.MONGO_URL", process.env.MONGO_LOCAL);
export async function connect() {
  console.log("Đang cố gắng kết nối đến MongoDB...");

  try {
    mongoose.connect(process.env.MONGO_LOCAL!);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("Mongodb connected successfully");
    });

    connection.on("error", (err) => {
      console.log(
        "Mongodb connection error. Please make sure MongoDb is running" + err
      );
      process.exit();
    });
  } catch (error) {
    console.log("Something went wrong");
    console.log(error);
  }
}

console.log("Hàm kết nối Mongoose:", mongoose.connect);

