import * as runtime from "../internal/runtime/mod.js";
export type { Logger };
/**
 * A field value we support logging
 */
export type FieldValue = string | number | boolean | null | undefined | FieldsObject | FieldValue[];
/**
 * A map of fields that can be logged
 */
export type FieldsObject = Record<string, FieldValue>;
export declare enum LogLevel {
    Trace = 1,
    Debug = 2,
    Info = 3,
    Warn = 4,
    Error = 5
}
declare class Logger {
    private impl;
    constructor(impl: runtime.Logger);
    /**
     * Returns a new logger with the specified level.
     */
    withLevel(level: LogLevel): Logger;
    /**
     * Returns a new logger with the given fields added to the context.
     */
    with(fields: FieldsObject): Logger;
    /**
     * Trace logs a message at the trace level.
     */
    trace(msg: string, fields?: FieldsObject): void;
    /**
     * Debug logs a message at the debug level.
     */
    debug(msg: string, fields?: FieldsObject): void;
    /**
     * Info logs a message at the info level.
     */
    info(msg: string, fields?: FieldsObject): void;
    /**
     * Warn logs a message at the warn level.
     */
    warn(err: Error | unknown, fields?: FieldsObject): void;
    warn(err: Error | unknown, msg: string, fields?: FieldsObject): void;
    warn(msg: string, fields?: FieldsObject): void;
    error(err: Error | unknown, fields?: FieldsObject): void;
    error(err: Error | unknown, msg: string, fields?: FieldsObject): void;
    error(msg: string, fields?: FieldsObject): void;
    /**
     * The actual logging implementation.
     */
    private log;
}
declare const log: Logger;
/**
 * The default logger for the app
 */
export default log;
/**
 * Trace logs a message at the trace level
 */
export declare function trace(msg: string, fields?: FieldsObject): void;
/**
 * Debug logs a message at the debug level
 */
export declare function debug(msg: string, fields?: FieldsObject): void;
/**
 * Info logs a message at the info level
 */
export declare function info(msg: string, fields?: FieldsObject): void;
/**
 * Warn logs a message at the warn level
 */
export declare function warn(err: Error | unknown, fields?: FieldsObject): void;
export declare function warn(err: Error | unknown, msg: string, fields?: FieldsObject): void;
export declare function warn(msg: string, fields?: FieldsObject): void;
/**
 * Error logs a message at the error level
 */
export declare function error(err: Error | unknown, fields?: FieldsObject): void;
export declare function error(err: Error | unknown, msg: string, fields?: FieldsObject): void;
export declare function error(msg: string, fields?: FieldsObject): void;
