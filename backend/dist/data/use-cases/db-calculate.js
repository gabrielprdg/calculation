"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbCalculate = void 0;
class DbCalculate {
    constructor(calculateRepository) {
        this.calculateRepository = calculateRepository;
    }
    async calc(calcData) {
        const answer = eval(calcData.calc);
        await this.calculateRepository.add({ ...calcData, answer });
        return answer;
    }
}
exports.DbCalculate = DbCalculate;
//# sourceMappingURL=db-calculate.js.map