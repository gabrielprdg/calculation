import { CalcParams, Calculate } from "../../domain/use-cases/calculate/calculate"
import { CalculateRepository } from "../protocols/calculate-repository"

export class DbCalculate implements Calculate {
  private readonly calculateRepository: CalculateRepository

  constructor (calculateRepository: CalculateRepository) {
    this.calculateRepository = calculateRepository
  }

  async calc (calcData: CalcParams): Promise<number> {
    const answer = eval(calcData.calc)
    await this.calculateRepository.add({...calcData, answer})
    return answer
  }
}