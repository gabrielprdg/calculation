import { CalculateController } from '../../../../presentation/controllers/calculate/calculate-controller'
import { Controller } from '../../../../presentation/protocols'
import { makeDbCalculate } from '../../use-cases/calculate/db-calculate-factory'
import { makeCalculateValidation } from './calculate-validation-factory'

export const makeCalculateController = (): Controller => {
  return new CalculateController(makeDbCalculate(), makeCalculateValidation())
}
