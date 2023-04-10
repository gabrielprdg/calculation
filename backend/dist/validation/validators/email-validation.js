"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailValidation = void 0;
const invalid_param_error_1 = require("../../presentation/errors/invalid-param-error");
class EmailValidation {
    constructor(emailValidator, email) {
        this.emailValidator = emailValidator;
        this.email = email;
    }
    validate(input) {
        const isValid = this.emailValidator.isValid(input[this.email]);
        if (!isValid) {
            return new invalid_param_error_1.InvalidParamError(this.email);
        }
    }
}
exports.EmailValidation = EmailValidation;
//# sourceMappingURL=email-validation.js.map