import { FieldValidation } from '~/validation/protocols'
import { RequiredFieldError } from '~/validation/errors'

export class DateBiggerThenValidation implements FieldValidation {
  constructor(
    readonly field: string,
    private readonly fieldCompare: string
  ) { }

  validate(input: any): object | null {
    let error = null
    let err = false

    if (input[this.field].length > 0) {
      const date = new Date(input[this.field])
      const dateCompare = new Date(input[this.fieldCompare])

      if(date.toDateString() < dateCompare.toDateString()){
        err = true
      }
    }
    if (err) {
      error = {
        fieldName: this.field,
        type: 'InvalidField',
        message: RequiredFieldError
      }
    }

    return error
  }
} 