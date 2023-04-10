import { LoadCalculations } from '../../../domain/use-cases/load-calculations/load-calculations'
import { ok, serverError } from '../../helpers/http/http-helper'
import { Controller } from '../../protocols/controller'
import { HttpRequest, HttpResponse } from '../../protocols/http'

export class LoadCalculationsController implements Controller {
  private readonly loadCalculations: LoadCalculations

  constructor (loadCalculations: LoadCalculations) {
    this.loadCalculations = loadCalculations
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const calculations = await this.loadCalculations.loadAll()

      return ok(calculations)
    } catch (err) {
      return serverError(err)
    }
  }
}
