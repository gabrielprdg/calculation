export type answerParams = {
  answer: string
}

export interface AddAnswer {
  add: (answerParams: answerParams) => Promise<void>
}