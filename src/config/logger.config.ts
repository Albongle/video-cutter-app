import logger from 'log4js';
import path from 'path';

logger.configure({
    appenders: {
        myLoggerConsole: { type: 'console' },
        myLoggerInfo: {
            type: 'file',
            filename: path.join(__dirname, '..', '..', 'logs', 'Info.log'),
        },
        myLoggerWarn: {
            type: 'file',
            filename: path.join(__dirname, '..', '..', 'logs', 'Warn.log'),
        },
        myLoggerError: {
            type: 'file',
            filename: path.join(__dirname, '..', '..', 'logs', 'Error.log'),
        },
    },
    categories: {
        default: { appenders: ['myLoggerConsole', 'myLoggerInfo'], level: 'info' },
        warn: { appenders: ['myLoggerWarn'], level: 'warn' },
        error: { appenders: ['myLoggerError'], level: 'error' },
    },
});

function initialize() {
    const date = new Date();

    const message = `${'='.repeat(15)}${date.toLocaleDateString('es-AR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })}${'='.repeat(15)}`;

    const loggerInfo = logger.getLogger();
    const loggerWarn = logger.getLogger('warn');
    const loggerError = logger.getLogger('error');

    loggerInfo.info(message);
    loggerWarn.warn(message);
    loggerError.error(message);
}

initialize();

export default logger;
