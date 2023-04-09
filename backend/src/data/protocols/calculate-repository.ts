export type CalcParamsRepo = {
  accountId: string
  calc: string
  answer: number
}

export interface CalculateRepository {
  add: (calcData: CalcParamsRepo) => Promise<void>
}