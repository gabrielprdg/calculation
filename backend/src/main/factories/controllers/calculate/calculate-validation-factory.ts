import { Validation } from '../../../../presentation/protocols'
import { RequiredFieldsValidation, ValidationComposite } from '../../../../validation/validators'

export const makeCalculateValidation = (): ValidationComposite => {
  const validations: Validation[] = []

  for (const field of ['calc']) {
    validations.push(new RequiredFieldsValidation(field))
  }
  return new ValidationComposite(validations)
}
