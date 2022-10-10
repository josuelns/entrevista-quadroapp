import { ValidationComposite } from '~/main/composites'
import { ValidationBuilder as Builder } from '~/main/builders'

export const makeAddAppointmentValidation = (): ValidationComposite => ValidationComposite.build([
  ...Builder.field('title').required().build(),
  ...Builder.field('started_date').required().build(),
  ...Builder.field('ending_date').required().build(),
])