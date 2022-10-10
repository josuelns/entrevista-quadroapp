import { ValidationComposite } from '~/main/composites'
import { ValidationBuilder as Builder } from '~/main/builders'

export const makeEditAppointmentValidation = (): ValidationComposite => ValidationComposite.build([
  ...Builder.field('email').required().build(),
  ...Builder.field('password').required().build()
])