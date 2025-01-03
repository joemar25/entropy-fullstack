import { getCurrentRequest } from "../reqtrack/mod.js";
export function getAuthData() {
    const authData = getCurrentRequest()?.getAuthData();
    if (!authData) {
        return null;
    }
    else {
        return authData;
    }
}
//# sourceMappingURL=mod.js.map