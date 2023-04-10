export type CalcParams = {
  accountId: string
  calc: string
}

export interface Calculate {
  calc: (calcData: CalcParams) => Promise<number>
}