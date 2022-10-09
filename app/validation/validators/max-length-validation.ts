import { FieldValidation } from '~/validation/protocols'
import { InvalidFieldError } from '~/validation/errors'

export class MaxLengthValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minHour: number) {}

  validate (input: object): Error {
    //todo
    return new Error
  }
} 