import { FieldValidation } from '~/validation/protocols'
import { InvalidFieldError } from '~/validation/errors'

export class AppointmentDataValidation implements FieldValidation {
  constructor (readonly field: string, private readonly minHour: number) {}

  validate (input: object): Error {
    //todo
    return new Error
    //return input[this.field]?.length < this.minHour ? new InvalidFieldError() : null
  }
} 