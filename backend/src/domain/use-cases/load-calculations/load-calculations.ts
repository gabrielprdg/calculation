import { CalculationModel } from "../../../domain/model/calculation"


export interface LoadCalculations {
  loadAll: () => Promise<CalculationModel[]>
}