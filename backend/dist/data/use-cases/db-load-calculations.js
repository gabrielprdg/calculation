"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbLoadCalculations = void 0;
class DbLoadCalculations {
    constructor(loadCalculationsRepository) {
        this.loadCalculationsRepository = loadCalculationsRepository;
    }
    async loadAll() {
        const calculations = await this.loadCalculationsRepository.loadAll();
        return calculations;
    }
}
exports.DbLoadCalculations = DbLoadCalculations;
//# sourceMappingURL=db-load-calculations.js.map