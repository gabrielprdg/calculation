import { CalculationModel } from '../../domain/model/calculation'

export interface LoadCalculationsRepository {
  loadAll: () => Promise<CalculationModel[]>
}