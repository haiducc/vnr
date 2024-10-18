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
