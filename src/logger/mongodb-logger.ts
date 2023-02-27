import winston from "winston";
import { MongoDB } from "winston-mongodb";
import { mongoConfig } from "../config/connection";

// Set up Winston logger
const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(),
    new MongoDB({
      level: "info",
      db: mongoConfig.uri,
      collection: "mongolog",
      dbName: mongoConfig.dbName,
      options: { useUnifiedTopology: true },
    }),
  ],
});

export default logger;
