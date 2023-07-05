import { config } from "./config";


enum LogLevel {
    //used to log where you are in the program. helps to determine logic flow.
    Trace = 'Trace',
    //intended for logging detailed information about the system for debugging purposes.
    Debug = 'Debug',
    //Purely informative and not looking into them on a regular basis shouldn’t result in missing any important information.
    Info = 'Info',
    //signifies potential issues that may lead to errors or unexpected behavior in the future if not addressed.
    Warn = 'Warn',
    //indicates error conditions that impair some operation but are less severe than critical situations.
    Error = 'Error',
    //indicates that the system is unusable and requires immediate attention.
    Fatal = 'Fatal'
}



enum LogFormat {
    Text = 'Text',
    Pretty = 'Pretty',
    Json = 'Json',
}

enum Color {
    brown = '\x1b[38;5;94m',
    red = '\x1b[38;5;160m',
    darkRed = '\x1b[38;5;196m',
    yellow = '\x1b[38;5;226m',
    lightYellow = '\x1b[38;5;229m',
    pink = '\x1b[38;5;207m',
    green = '\x1b[38;5;34m',
    neonGreen = '\x1b[38;5;46m',
    aqua = '\x1b[38;5;51m',
    purple = '\x1b[38;5;93m',
    lightPurple = '\x1b[38;5;53m',
    blue = '\x1b[38;5;33m',
    darkGrey = '\x1b[38;5;232m',
    grey = '\x1b[38;5;248m',
    lightGrey = '\x1b[38;5;255m',
    white = '\x1b[37m',
    black = '\x1b[30m',
    blackOnWhite = '\x1b[30;47m',
    blackOnRed = '\x1b[30;48;5;196m',
    whiteOnRed = '\x1b[37;48;5;160m'
}

export class Log {

    private static readonly reset: string = ' \x1b[0m';

    public static Info(message: string): void {

        const currentLogLevel = config.LogLevel.toLowerCase();
        if (currentLogLevel == LogLevel.Info.toLowerCase() ||
            currentLogLevel == LogLevel.Debug.toLowerCase() ||
            currentLogLevel == LogLevel.Trace.toLowerCase())
            this.output(LogLevel.Info, message);
    }



    private static output(logLevel: LogLevel, message: string, error?: Error): void {
        if (config.LogFormat.toLowerCase() == LogFormat.Text.toLowerCase())
            this.outputText(message, error);
        if (config.LogFormat.toLowerCase() == LogFormat.Pretty.toLowerCase())
            this.outputPretty(logLevel, message, error);
        if (config.LogFormat.toLowerCase() == LogFormat.Json.toLowerCase())
            this.outputJson(message, error);
    }
    private static outputPretty(logLevel: LogLevel, message: string, error?: Error): void {
        let logString: string = '';

        if (LogLevel.Trace == logLevel)
            logString = '';

        let testError: Error = new Error("oh my");



        logString += `${Color.grey}${LogLevel.Trace}`;

        console.log(`${Color.grey}${LogLevel.Trace}|${message}`);
        console.log(`${Color.green}${LogLevel.Debug}|${message}`);
        console.log(`${Color.brown}${LogLevel.Info} |${message}`);
        console.log(`${Color.lightYellow}${LogLevel.Warn} |${message}`);
        console.log(`${Color.red}${LogLevel.Error}|${message}\n  ${testError.stack ?? ''}\n  ${testError.cause ?? ''}`);
        console.log(`${Color.whiteOnRed}${LogLevel.Fatal}|${message}`);

    }
    private static outputText(message: string, error?: Error): void {
        console.log()
    }
    private static outputJson(message: string, error?: Error): void {
        console.log()
    }

}