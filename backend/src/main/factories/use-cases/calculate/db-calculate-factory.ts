import { DbCalculate } from '../../../../data/use-cases/db-calculate'
import { TypeOrmCalculateRepository } from '../../../../infra/db/typeorm/repositories/typeorm-calculate-repository'

export const makeDbCalculate = (): DbCalculate => {
  const typeOrmCalculateRepository = new TypeOrmCalculateRepository()
  return new DbCalculate(typeOrmCalculateRepository)
}
