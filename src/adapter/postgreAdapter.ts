import { Pool } from "pg";
import { Database } from "./adapterInterface";

export class PostgresAdapter implements Database {
  private pool: Pool;

  constructor(private config: any) {
    this.pool = new Pool(config);
  }

  async connect(): Promise<void> {
    try {
      await this.pool.connect();
      console.log("Connected to PostgreSQL database");
    } catch (error) {
      console.error("Error connecting to PostgreSQL database:", error);
      throw error;
    }
  }

  async disconnect(): Promise<void> {
    try {
      await this.pool.end();
      console.log("Disconnected from PostgreSQL database");
    } catch (error) {
      console.error("Error disconnecting from PostgreSQL database:", error);
      throw error;
    }
  }

  async query(sql: string): Promise<any[]> {
    try {
      const result = await this.pool.query(sql);
      return result.rows;
    } catch (error) {
      console.error("Error querying PostgreSQL database:", error);
      throw error;
    }
  }
}

// const postgresAdapter = new PostgresAdapter(postgresConfig);
// await postgresAdapter.connect();
