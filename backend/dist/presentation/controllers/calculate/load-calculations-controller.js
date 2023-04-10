"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoadCalculationsController = void 0;
const http_helper_1 = require("../../helpers/http/http-helper");
class LoadCalculationsController {
    constructor(loadCalculations) {
        this.loadCalculations = loadCalculations;
    }
    async handle(httpRequest) {
        try {
            const calculations = await this.loadCalculations.loadAll();
            return (0, http_helper_1.ok)(calculations);
        }
        catch (err) {
            return (0, http_helper_1.serverError)(err);
        }
    }
}
exports.LoadCalculationsController = LoadCalculationsController;
//# sourceMappingURL=load-calculations-controller.js.map