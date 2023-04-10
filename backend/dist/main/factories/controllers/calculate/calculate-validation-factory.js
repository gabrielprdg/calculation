"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeCalculateValidation = void 0;
const validators_1 = require("../../../../validation/validators");
const makeCalculateValidation = () => {
    const validations = [];
    for (const field of ['calc']) {
        validations.push(new validators_1.RequiredFieldsValidation(field));
    }
    return new validators_1.ValidationComposite(validations);
};
exports.makeCalculateValidation = makeCalculateValidation;
//# sourceMappingURL=calculate-validation-factory.js.map