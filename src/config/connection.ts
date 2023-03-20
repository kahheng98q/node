import dotenv from "dotenv";

dotenv.config();

export const mongoConfig = {
  uri: process.env.DB_MONGODB_URL,
  dbName: "bydaway",
  collectionName: "mycollection",
};

export const postgresConfig = {
  user: process.env.DB_POSTGRESQL_USER,
  host: "localhost",
  database: process.env.DB_POSTGRESQL_DB,
  password: process.env.DB_POSTGRESQL_PASSWORD,
  port: 5432,
};
