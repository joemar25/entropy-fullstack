import { getCurrentRequest } from "../internal/reqtrack/mod.js";
import * as runtime from "../internal/runtime/mod.js";
export var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Trace"] = 1] = "Trace";
    LogLevel[LogLevel["Debug"] = 2] = "Debug";
    LogLevel[LogLevel["Info"] = 3] = "Info";
    LogLevel[LogLevel["Warn"] = 4] = "Warn";
    LogLevel[LogLevel["Error"] = 5] = "Error";
})(LogLevel || (LogLevel = {}));
class Logger {
    impl;
    constructor(impl) {
        this.impl = impl;
    }
    /**
     * Returns a new logger with the specified level.
     */
    withLevel(level) {
        return new Logger(this.impl.withLevel(level));
    }
    /**
     * Returns a new logger with the given fields added to the context.
     */
    with(fields) {
        return new Logger(this.impl.with(fields));
    }
    /**
     * Trace logs a message at the trace level.
     */
    trace(msg, fields) {
        this.log(runtime.LogLevel.Trace, msg, fields);
    }
    /**
     * Debug logs a message at the debug level.
     */
    debug(msg, fields) {
        this.log(runtime.LogLevel.Debug, msg, fields);
    }
    /**
     * Info logs a message at the info level.
     */
    info(msg, fields) {
        this.log(runtime.LogLevel.Info, msg, fields);
    }
    warn(errOrMsg, msgOrFields, fields) {
        this.log(runtime.LogLevel.Warn, errOrMsg, msgOrFields, fields);
    }
    error(errOrMsg, msgOrFields, fields) {
        this.log(runtime.LogLevel.Error, errOrMsg, msgOrFields, fields);
    }
    /**
     * The actual logging implementation.
     */
    log(level, errOrMsg, msgOrFields, possibleFields) {
        let err;
        let msg;
        let fields;
        // Parse the arguments
        if (typeof errOrMsg === "string") {
            // log(msg, fields?)
            err = undefined;
            msg = errOrMsg;
            fields = msgOrFields;
        }
        else if (typeof msgOrFields === "string") {
            // log(err, msg, fields?)
            if (errOrMsg) {
                if (errOrMsg instanceof Error) {
                    err = errOrMsg;
                }
                else {
                    err = new Error(String(errOrMsg));
                }
            }
            msg = msgOrFields;
            fields = possibleFields;
        }
        else {
            // log(err, fields?)
            if (errOrMsg) {
                if (errOrMsg instanceof Error) {
                    err = errOrMsg;
                }
                else {
                    err = new Error(String(errOrMsg));
                }
            }
            msg = "";
            fields = msgOrFields;
            // if (possibleFields) {
            //   throw new Error("Invalid arguments to log");
            // }
        }
        const req = getCurrentRequest();
        this.impl.log(req, level, msg, err, undefined, fields);
    }
}
const log = new Logger(runtime.RT.logger());
/**
 * The default logger for the app
 */
export default log;
/**
 * Trace logs a message at the trace level
 */
export function trace(msg, fields) {
    log.trace(msg, fields);
}
/**
 * Debug logs a message at the debug level
 */
export function debug(msg, fields) {
    log.debug(msg, fields);
}
/**
 * Info logs a message at the info level
 */
export function info(msg, fields) {
    log.info(msg, fields);
}
export function warn(errOrMsg, msgOrFields, fields) {
    // the type cast here is just for TSC to be happy - the underlying method uses the same overloads so
    // will type check the arguments correctly
    log.warn(errOrMsg, msgOrFields, fields);
}
export function error(errOrMsg, msgOrFields, fields) {
    // the type cast here is just for TSC to be happy - the underlying method uses the same overloads so
    // will type check the arguments correctly
    log.error(errOrMsg, msgOrFields, fields);
}
//# sourceMappingURL=mod.js.map