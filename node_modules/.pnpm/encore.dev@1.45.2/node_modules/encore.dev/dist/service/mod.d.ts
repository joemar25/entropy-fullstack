import { Middleware } from "../api/mod.js";
/**
 * Defines an Encore backend service.
 *
 * Use this class to define a new backend service with the given name.
 * The scope of the service is its containing directory, and all subdirectories.
 *
 * It must be called from files named `encore.service.ts`, to enable Encore to
 * efficiently identify possible service definitions.
 */
export declare class Service {
    readonly name: string;
    readonly cfg: ServiceConfig;
    constructor(name: string, cfg?: ServiceConfig);
}
export interface ServiceConfig {
    middlewares?: Middleware[];
}
