import { setCurrentRequest } from "../internal/reqtrack/mod.js";
import * as runtime from "../internal/runtime/mod.js";
export class Subscription {
    topic;
    name;
    impl;
    constructor(topic, name, cfg) {
        this.topic = topic;
        this.name = name;
        const handler = (msg) => {
            setCurrentRequest(msg);
            return cfg.handler(msg.payload());
        };
        this.impl = runtime.RT.pubsubSubscription({
            topicName: topic.name,
            subscriptionName: name,
            handler,
        });
        this.startSubscribing();
    }
    startSubscribing() {
        const that = this;
        this.impl.subscribe().finally(() => {
            setTimeout(() => that.startSubscribing(), 1000);
        });
    }
}
//# sourceMappingURL=subscription.js.map