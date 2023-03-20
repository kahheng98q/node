import {
  MongoClient,
  Collection,
  Db,
  ServerApiVersion,
  MongoClientOptions,
} from "mongodb";
import { Database } from "./adapterInterface";
import mongoose from "mongoose";
import { ObjectId } from "bson";

export class MongoDBAdapter implements Database {
  private client: MongoClient = {} as MongoClient;
  private db: Db = {} as Db;
  private collection: Collection = {} as Collection;

  constructor(private config: any) {}

  async connect(): Promise<void> {
    try {
      this.client = await MongoClient.connect(this.config.uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverApi: ServerApiVersion.v1,
      } as MongoClientOptions);
      this.db = this.client.db(this.config.dbName);
      this.collection = this.db.collection(this.config.collectionName);
      console.log("Connected to MongoDB database");
    } catch (error) {
      console.error("Error connecting to MongoDB database:", error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.client.close();
      console.log("Disconnected from MongoDB database");
    } catch (error) {
      console.error("Error disconnecting from MongoDB database:", error);
      throw error;
    }
  }

  async getQuery(query: string): Promise<any[]> {
    try {
      const filter = JSON.parse(query);
      const cursor = await this.collection.find(filter);
      const result = await cursor.toArray();
      return result;
    } catch (error) {
      console.error("Error querying MongoDB database:", error);
      throw error;
    }
  }

  async getListQuery(query: object, projection?: object): Promise<any[]> {
    try {
      // const filter = JSON.parse(query);
      const cursor = await this.collection.find(query, projection);
      const result = await cursor.toArray();
      return result;
    } catch (error) {
      console.error("Error querying MongoDB database:", error);
      throw error;
    }
  }

  async postQuery(id: string, req: any): Promise<void> {
    try {
      const filter = { _id: new ObjectId(id) };
      const update = { $push: { todos: req } };

      const result = await this.collection.updateOne(filter, update);
      if (result.modifiedCount === 1) {
        console.log("Data was inserted successfully"); // Data was inserted successfully
      } else {
        console.log("Data was not inserted"); // Data was not inserted
      }
    } catch (error) {
      console.error("Error inserting data into MongoDB database:", error);
      throw error;
    }
  }
  async putQuery(id: string, req: any): Promise<void> {
    try {
      const filter = { _id: new ObjectId(id) };
      const update = { $set: { todos: req } };
      await this.collection.insertOne(req);
    } catch (error) {
      console.error("Error updating data into MongoDB database:", error);
      throw error;
    }
  }
}
