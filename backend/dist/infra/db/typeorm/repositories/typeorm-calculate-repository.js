"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmCalculateRepository = void 0;
const typeorm_calculate_1 = require("../entities/typeorm-calculate");
const app_data_source_1 = require("../helper/app-data-source");
const calculate_mapper_1 = require("../mappers/calculate-mapper");
class TypeOrmCalculateRepository {
    async add(calcData) {
        const calculate = new typeorm_calculate_1.TypeOrmCalculate();
        calculate.calc = calcData.calc;
        calculate.accountId = calcData.accountId;
        calculate.answer = calcData.answer;
        await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_calculate_1.TypeOrmCalculate)
            .save(calculate);
    }
    async loadAll() {
        const calculate = await app_data_source_1.AppDataSource.getInstance()
            .getRepository(typeorm_calculate_1.TypeOrmCalculate)
            .createQueryBuilder('calculate')
            .getMany();
        const domainCar = calculate_mapper_1.Mapper.toDomainEntities(calculate);
        return domainCar;
    }
}
exports.TypeOrmCalculateRepository = TypeOrmCalculateRepository;
//# sourceMappingURL=typeorm-calculate-repository.js.map