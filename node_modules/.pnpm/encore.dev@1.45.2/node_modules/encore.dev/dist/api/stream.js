export class IterableStream {
    stream;
    constructor(stream) {
        this.stream = stream;
    }
    recv() {
        return this.stream.recv();
    }
    async *[Symbol.asyncIterator]() {
        while (true) {
            try {
                yield await this.stream.recv();
            }
            catch (e) {
                break;
            }
        }
    }
}
export class IterableSocket {
    socket;
    constructor(socket) {
        this.socket = socket;
    }
    send(msg) {
        return this.socket.send(msg);
    }
    recv() {
        return this.socket.recv();
    }
    close() {
        this.socket.close();
    }
    async *[Symbol.asyncIterator]() {
        while (true) {
            try {
                yield await this.socket.recv();
            }
            catch (e) {
                break;
            }
        }
    }
}
export class Sink {
    sink;
    constructor(sink) {
        this.sink = sink;
    }
    send(msg) {
        return this.sink.send(msg);
    }
    close() {
        this.sink.close();
    }
}
//# sourceMappingURL=stream.js.map