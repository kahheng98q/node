import { createLogger, transports, format } from "winston";
import PostgresTransport from "./PostgresTransport";
import pool from "../config/dbconnector";
const opts = {
    level: "info",
    tableName: "winston_logs",
};
// Create the instance.
const postgresTransport = new PostgresTransport(pool, opts);
const logConfiguration = {
    transports: [new transports.Console(), postgresTransport],
    format: format.combine(format.colorize(), format.timestamp({
        format: "MMM-DD-YYYY HH:mm:ss",
    }), format.printf(({ timestamp, level, message }) => {
        return `[${timestamp}] ${level}: ${message}`;
    })),
};
export const logger = createLogger(logConfiguration);
// export const dbLogger = createLogger(logDBConf);
// logger.info("Hello world!");
