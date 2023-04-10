import { badRequest, ok, serverError } from "../../../presentation/helpers/http/http-helper"
import { Calculate } from "../../../domain/use-cases/calculate/calculate"
import { Controller, HttpRequest, HttpResponse, Validation } from "../../../presentation/protocols"

export class CalculateController implements Controller {
  private readonly calculate: Calculate
  private readonly validation: Validation

  constructor (calculate: Calculate, validation: Validation) {
    this.calculate = calculate
    this.validation = validation
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = await this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { calc } = httpRequest.body
      const { accountId } = httpRequest

      const answer = await this.calculate.calc({
        calc,
        accountId
      })

      return ok(answer)
    } catch (err) {
      return serverError(err)
    }
  }
}
