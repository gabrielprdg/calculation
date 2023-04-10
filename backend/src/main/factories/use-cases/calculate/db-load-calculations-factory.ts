import { DbLoadCalculations } from '../../../../data/use-cases/db-load-calculations'
import { TypeOrmCalculateRepository } from '../../../../infra/db/typeorm/repositories/typeorm-calculate-repository'

export const makeDbLoadCalculations = (): DbLoadCalculations => {
  const typeOrmCalculateRepository = new TypeOrmCalculateRepository()
  return new DbLoadCalculations(typeOrmCalculateRepository)
}
