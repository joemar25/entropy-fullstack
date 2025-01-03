import * as runtime from "../internal/runtime/mod.js";
export declare class IterableStream {
    private stream;
    constructor(stream: runtime.Stream);
    recv(): Promise<Record<string, any>>;
    [Symbol.asyncIterator](): AsyncGenerator<PVals, void, unknown>;
}
export declare class IterableSocket {
    private socket;
    constructor(socket: runtime.Socket);
    send(msg: Record<string, any>): void;
    recv(): Promise<Record<string, any>>;
    close(): void;
    [Symbol.asyncIterator](): AsyncGenerator<PVals, void, unknown>;
}
export declare class Sink {
    private sink;
    constructor(sink: runtime.Sink);
    send(msg: Record<string, any>): void;
    close(): void;
}
