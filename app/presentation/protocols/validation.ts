export interface Validation {
    validate: (fieldName: string, input: object) => object | null
  }