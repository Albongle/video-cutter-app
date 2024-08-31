import logger from "../../config/logger.config";

export default class Logger {
  public static log(message: any, ...args) {
    logger.getLogger().info(message, ...args);
  }
  public static error(message: any, ...args) {
    logger.getLogger("error").error(message, ...args);
  }
  public static warn(message: any, ...args) {
    logger.getLogger("warn").warn(message, ...args);
  }
}
