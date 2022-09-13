import { createLogger, transports, format } from "winston";

const logConfiguration = {
  transports: [new transports.Console()],
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
};

const logDBConf = {
  transports: [new transports.Console()],
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: "MMM-DD-YYYY HH:mm:ss",
    }),
    format.printf(({ timestamp, level, message }) => {
      return `[${timestamp}] ${level}: ${message}`;
    })
  ),
};

export const logger = createLogger(logConfiguration);
export const dbLogger = createLogger(logDBConf);

// logger.info("Hello world!");
