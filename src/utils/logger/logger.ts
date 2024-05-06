/* istanbul ignore file */
import * as LoggerLevel from 'loglevel';

class Logger {
  constructor(level: LoggerLevel.LogLevelDesc) {
    LoggerLevel.setDefaultLevel(level);
  }

  public log(...message): void {
    LoggerLevel.log(...message);
  }
  public warn(...message): void {
    LoggerLevel.warn(...message);
  }
  public error(...message): void {
    LoggerLevel.error(...message);
  }
}

const logLevel = process.env.NODE_ENV === 'production' ? LoggerLevel.levels.ERROR : LoggerLevel.levels.TRACE;
export const logger = new Logger(logLevel);
