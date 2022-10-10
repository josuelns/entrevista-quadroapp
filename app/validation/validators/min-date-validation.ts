import { FieldValidation } from '~/validation/protocols'
import { RequiredFieldError } from '~/validation/errors'

export class MinDateValidation implements FieldValidation {
  constructor(
    readonly field: string,
    private readonly minData: Date
  ) { }

  validate(input: any): object | null {
    let error = null
    let err = false

    if (input[this.field].length > 0) {


      const date = new Date(input[this.field])

      const dateYear = date.getFullYear()
      const dateMonth = date.getMonth()
      const dateDay = date.getDay()
      const dateHour = date.getHours()
      const dateMinute = date.getMinutes()

      const dateCompare = this.minData

      const dateYearCompare = dateCompare.getFullYear()
      const dateMonthCompare = dateCompare.getMonth()
      const dateDayCompare = dateCompare.getDay()
      const dateHourCompare = dateCompare.getHours()
      const dateMinuteCompare = dateCompare.getMinutes()

      if (dateYear < dateYearCompare) {
        err = true
      }
      else{
        if (dateMonth < dateMonthCompare) {
          err = true
        }else{
          if (dateDay < dateDayCompare) {
            err = true
          }
          else{
            if (dateHour < dateHourCompare) {
              err = true
            }else{
              if (dateMinute < dateMinuteCompare) {
                err = true
              }
            }
          }
        }
      }
    }
    if (err) {
      console.log('tenho erro')
      error = {
        fieldName: this.field,
        type: 'InvalidField',
        message: RequiredFieldError + 'm d'
      }
    }

    return error
  }
} 