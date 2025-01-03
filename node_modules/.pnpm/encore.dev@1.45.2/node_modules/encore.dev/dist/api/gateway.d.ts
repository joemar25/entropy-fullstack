import { AuthHandlerBrand } from "../auth/mod.js";
export declare class Gateway {
    readonly name: string;
    readonly cfg: GatewayConfig;
    private impl;
    constructor(cfg: GatewayConfig);
}
export interface GatewayConfig {
    authHandler?: AuthHandlerBrand;
}
