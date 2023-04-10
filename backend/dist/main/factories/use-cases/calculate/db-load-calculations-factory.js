"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbLoadCalculations = void 0;
const db_load_calculations_1 = require("../../../../data/use-cases/db-load-calculations");
const typeorm_calculate_repository_1 = require("../../../../infra/db/typeorm/repositories/typeorm-calculate-repository");
const makeDbLoadCalculations = () => {
    const typeOrmCalculateRepository = new typeorm_calculate_repository_1.TypeOrmCalculateRepository();
    return new db_load_calculations_1.DbLoadCalculations(typeOrmCalculateRepository);
};
exports.makeDbLoadCalculations = makeDbLoadCalculations;
//# sourceMappingURL=db-load-calculations-factory.js.map