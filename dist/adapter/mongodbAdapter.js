"use strict";
// import { MongoClient, Collection, Db } from "mongodb";
// class MongoDBAdapter implements Database {
//   private client: MongoClient;
//   private db: Db;
//   private collection: Collection;
//   constructor(private config: any) {}
//   async connect(): Promise<void> {
//     try {
//       this.client = await MongoClient.connect(this.config.uri, {
//         useNewUrlParser: true,
//         useUnifiedTopology: true,
//       } as any);
//       this.db = this.client.db(this.config.dbName);
//       this.collection = this.db.collection(this.config.collectionName);
//       console.log("Connected to MongoDB database");
//     } catch (error) {
//       console.error("Error connecting to MongoDB database:", error);
//       throw error;
//     }
//   }
//   async disconnect(): Promise<void> {
//     try {
//       await this.client.close();
//       console.log("Disconnected from MongoDB database");
//     } catch (error) {
//       console.error("Error disconnecting from MongoDB database:", error);
//       throw error;
//     }
//   }
//   async query(query: string): Promise<any[]> {
//     try {
//       const filter = JSON.parse(query);
//       const cursor = await this.collection.find(filter);
//       const result = await cursor.toArray();
//       return result;
//     } catch (error) {
//       console.error("Error querying MongoDB database:", error);
//       throw error;
//     }
//   }
// }
// const mongoConfig = {
//   uri: "mongodb+srv://kahheng98q:bydaway@bydaway.lsxnbkm.mongodb.net/?retryWrites=true&w=majority",
//   dbName: "mydatabase",
//   collectionName: "mycollection",
// };
// const mongoAdapter = new MongoDBAdapter(mongoConfig);
// await mongoAdapter.connect();
