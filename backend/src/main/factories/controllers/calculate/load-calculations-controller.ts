import { makeDbLoadCalculations } from '../../../../main/factories/use-cases/calculate/db-load-calculations-factory'
import { LoadCalculationsController } from '../../../../presentation/controllers/calculate/load-calculations-controller'
import { Controller } from '../../../../presentation/protocols'

export const makeLoadCalculationsController = (): Controller => {
  return new LoadCalculationsController(makeDbLoadCalculations())
}
