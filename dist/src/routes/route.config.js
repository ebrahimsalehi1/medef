"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoutesConfig = void 0;
class RoutesConfig {
    constructor(app, name) {
        this.app = app;
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
exports.RoutesConfig = RoutesConfig;
