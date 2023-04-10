"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateController = void 0;
const http_helper_1 = require("../../../presentation/helpers/http/http-helper");
class CalculateController {
    constructor(calculate, validation) {
        this.calculate = calculate;
        this.validation = validation;
    }
    async handle(httpRequest) {
        try {
            const error = await this.validation.validate(httpRequest.body);
            if (error) {
                return (0, http_helper_1.badRequest)(error);
            }
            const { calc } = httpRequest.body;
            const { accountId } = httpRequest;
            const answer = await this.calculate.calc({
                calc,
                accountId
            });
            return (0, http_helper_1.ok)(answer);
        }
        catch (err) {
            return (0, http_helper_1.serverError)(err);
        }
    }
}
exports.CalculateController = CalculateController;
//# sourceMappingURL=calculate-controller.js.map