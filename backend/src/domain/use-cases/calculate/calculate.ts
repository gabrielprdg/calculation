export type CalcParams = {
  calc: string
}

export interface Calculate {
  calc: (calcData: CalcParams) => Promise<number>
}