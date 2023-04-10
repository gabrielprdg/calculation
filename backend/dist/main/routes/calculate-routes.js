"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_route_adapter_1 = require("../adapters/express-route-adapter");
const calculate_controller_factory_1 = require("../factories/controllers/calculate/calculate-controller-factory");
const load_calculations_controller_1 = require("../../main/factories/controllers/calculate/load-calculations-controller");
exports.default = (router) => {
    router.post('/calc', (0, express_route_adapter_1.adaptRoute)((0, calculate_controller_factory_1.makeCalculateController)()));
    router.get('/calculations', (0, express_route_adapter_1.adaptRoute)((0, load_calculations_controller_1.makeLoadCalculationsController)()));
};
//# sourceMappingURL=calculate-routes.js.map