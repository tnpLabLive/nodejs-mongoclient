import { MongoClient, ObjectId } from "mongodb";

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

let conn;

try {
  conn = await client.connect();
} catch (error) {
  console.log("error:", error);
}

let db = conn.db("clickup");

export { db, ObjectId };
