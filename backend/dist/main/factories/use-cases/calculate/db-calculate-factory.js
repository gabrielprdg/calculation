"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeDbCalculate = void 0;
const db_calculate_1 = require("../../../../data/use-cases/db-calculate");
const typeorm_calculate_repository_1 = require("../../../../infra/db/typeorm/repositories/typeorm-calculate-repository");
const makeDbCalculate = () => {
    const typeOrmCalculateRepository = new typeorm_calculate_repository_1.TypeOrmCalculateRepository();
    return new db_calculate_1.DbCalculate(typeOrmCalculateRepository);
};
exports.makeDbCalculate = makeDbCalculate;
//# sourceMappingURL=db-calculate-factory.js.map