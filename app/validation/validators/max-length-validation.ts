import { FieldValidation } from '~/validation/protocols'
import { RequiredFieldError } from '~/validation/errors'

export class MaxLengthValidation implements FieldValidation {
  constructor (
    readonly field: string,
    private readonly minLength : string
    ) {}

  validate (input: any): object | null {
    let error = null

    if(input[this.field] && input[this.field].length >= this.minLength){
      error = {
        fieldName: this.field,
        type: 'InvalidField',
        message: RequiredFieldError
      }
    }

    return  error
  }
} 