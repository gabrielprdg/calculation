import { CalcParamsRepo, CalculateRepository } from '../../../../data/protocols/calculate-repository'
import { TypeOrmCalculate } from '../entities/typeorm-calculate'
import { AppDataSource } from '../helper/app-data-source'
import { LoadCalculations } from '../../../../domain/use-cases/load-calculations/load-calculations'
import { CalculationModel } from 'domain/model/calculation'
import { Mapper } from '../mappers/calculate-mapper'

export class TypeOrmCalculateRepository implements CalculateRepository, LoadCalculations {
  async add (calcData: CalcParamsRepo): Promise<void> {
    const calculate = new TypeOrmCalculate()

    calculate.calc = calcData.calc
    calculate.accountId = calcData.accountId
    calculate.answer = calcData.answer


    await AppDataSource.getInstance()
      .getRepository(TypeOrmCalculate)
      .save(calculate)
  }

  async loadAll (): Promise<CalculationModel[]> {
    const calculate = await AppDataSource.getInstance()
    .getRepository(TypeOrmCalculate)
    .createQueryBuilder('calculate')
    .getMany()

    const domainCar = Mapper.toDomainEntities(calculate)

    return domainCar
  }
}
