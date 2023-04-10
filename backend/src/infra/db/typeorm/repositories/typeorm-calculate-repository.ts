import { CalcParamsRepo, CalculateRepository } from 'data/protocols/calculate-repository'
import { TypeOrmCalculate } from '../entities/typeorm-calculate'
import { AppDataSource } from '../helper/app-data-source'

export class TypeOrmCalculateRepository implements CalculateRepository {
  async add (calcData: CalcParamsRepo): Promise<void> {
    const calculate = new TypeOrmCalculate()

    calculate.calc = calcData.calc
    calculate.accountId = calcData.accountId
    calculate.answer = calcData.answer


    await AppDataSource.getInstance()
      .getRepository(TypeOrmCalculate)
      .save(calculate)
  }
}
