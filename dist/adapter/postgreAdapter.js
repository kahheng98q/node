import { Pool } from "pg";
class PostgresAdapter {
    config;
    pool;
    constructor(config) {
        this.config = config;
        this.pool = new Pool(config);
    }
    async connect() {
        try {
            await this.pool.connect();
            console.log("Connected to PostgreSQL database");
        }
        catch (error) {
            console.error("Error connecting to PostgreSQL database:", error);
            throw error;
        }
    }
    async disconnect() {
        try {
            await this.pool.end();
            console.log("Disconnected from PostgreSQL database");
        }
        catch (error) {
            console.error("Error disconnecting from PostgreSQL database:", error);
            throw error;
        }
    }
    async query(sql) {
        try {
            const result = await this.pool.query(sql);
            return result.rows;
        }
        catch (error) {
            console.error("Error querying PostgreSQL database:", error);
            throw error;
        }
    }
}
const postgresConfig = {
    user: "postgres",
    host: "localhost",
    database: "mydatabase",
    password: "mypassword",
    port: 5432,
};
const postgresAdapter = new PostgresAdapter(postgresConfig);
await postgresAdapter.connect();
