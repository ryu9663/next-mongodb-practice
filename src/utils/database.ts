import { MongoClient } from "mongodb";

declare global {
  namespace globalThis {
    var _mongo: Promise<MongoClient>;
  }
}

const DB_URL = process.env.NEXT_PUBLIC_DB_URL || "";
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  if (!global._mongo) {
    global._mongo = new MongoClient(DB_URL).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(DB_URL).connect();
}

export { connectDB };
