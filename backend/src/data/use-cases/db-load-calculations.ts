import { CalculationModel } from '../../domain/model/calculation'
import { LoadCalculationsRepository } from '../../data/protocols/load-calculations-repository'
import { LoadCalculations } from '../../domain/use-cases/load-calculations/load-calculations'

export class DbLoadCalculations implements LoadCalculations {
  private readonly loadCalculationsRepository: LoadCalculationsRepository

  constructor (loadCalculationsRepository: LoadCalculationsRepository) {
    this.loadCalculationsRepository = loadCalculationsRepository
  }

  async loadAll (): Promise<CalculationModel[]> {
    const calculations = await this.loadCalculationsRepository.loadAll()
    return calculations
  }
}
