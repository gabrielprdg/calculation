"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCalculateController = void 0;
const calculate_controller_1 = require("../../../../presentation/controllers/calculate/calculate-controller");
const db_calculate_factory_1 = require("../../use-cases/calculate/db-calculate-factory");
const calculate_validation_factory_1 = require("./calculate-validation-factory");
const makeCalculateController = () => {
    return new calculate_controller_1.CalculateController((0, db_calculate_factory_1.makeDbCalculate)(), (0, calculate_validation_factory_1.makeCalculateValidation)());
};
exports.makeCalculateController = makeCalculateController;
//# sourceMappingURL=calculate-controller-factory.js.map