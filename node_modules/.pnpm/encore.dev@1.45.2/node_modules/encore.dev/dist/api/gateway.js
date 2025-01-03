import * as runtime from "../internal/runtime/mod.js";
import { setCurrentRequest } from "../internal/reqtrack/mod.js";
export class Gateway {
    name;
    cfg;
    impl;
    constructor(cfg) {
        this.name = "api-gateway";
        this.cfg = cfg;
        let auth = cfg.authHandler;
        if (auth) {
            const handler = auth;
            auth = (req) => {
                setCurrentRequest(req);
                return handler(req.payload());
            };
        }
        this.impl = runtime.RT.gateway("api-gateway", {
            auth,
        });
    }
}
//# sourceMappingURL=gateway.js.map