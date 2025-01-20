const { lab } = require('color-convert');
const { createLogger, transports, format } = require('winston');
const { combine, timestamp, printf, label, colorize, simple } = format;

const printFormat = printf(( { timestamp, label, level, message }) =>{
    return `${timestamp} [${ label }] ${level} : ${message}`;
});

const printLogFormat = {
    file: combine(
    label({ label: "백로그" }),
    timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
    }),
    printFormat
    ),
    console: combine(
    colorize(),
    simple()
    ),
};

const opts = {
 file: new transports.File({
    filename: "access.log",
    dirname: "./logs",
    level: "info",
    format: printLogFormat.file,
}),
console: new transports.Console({
    level: "info",
    format: printLogFormat.console,
}),
};

const logger = createLogger({
    transports: [opts.file],
});

if (process.env.NODE_ENV !== "production") {
    logger.add(opts.console); 
}

logger.stream = {
    write: (message) => logger.info(message),
};

module.exports = logger;