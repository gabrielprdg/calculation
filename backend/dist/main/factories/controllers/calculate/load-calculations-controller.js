"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeLoadCalculationsController = void 0;
const db_load_calculations_factory_1 = require("../../../../main/factories/use-cases/calculate/db-load-calculations-factory");
const load_calculations_controller_1 = require("../../../../presentation/controllers/calculate/load-calculations-controller");
const makeLoadCalculationsController = () => {
    return new load_calculations_controller_1.LoadCalculationsController((0, db_load_calculations_factory_1.makeDbLoadCalculations)());
};
exports.makeLoadCalculationsController = makeLoadCalculationsController;
//# sourceMappingURL=load-calculations-controller.js.map