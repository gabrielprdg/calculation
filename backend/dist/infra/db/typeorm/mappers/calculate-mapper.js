"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mapper = void 0;
class Mapper {
    static toDomainEntity(typeOrmCalculate) {
        console.log('3e', typeOrmCalculate);
        const domain = {
            id: typeOrmCalculate.id,
            calc: typeOrmCalculate.calc,
            answer: typeOrmCalculate.answer,
            accountId: typeOrmCalculate.accountId,
            created_at: typeOrmCalculate.created_at
        };
        return domain;
    }
    static toDomainEntities(typeOrmCalculate) {
        return typeOrmCalculate.map(typeOrmCar => this.toDomainEntity(typeOrmCar));
    }
}
exports.Mapper = Mapper;
//# sourceMappingURL=calculate-mapper.js.map