import { ViewEngineForm } from 'view-engine/decorators'
import { IViewEngineFormHandler, IViewEngineForm } from 'view-engine/interfaces'

@ViewEngineForm({
  code: 1
})
export class DriversForm implements IViewEngineFormHandler {
  async onBeforeLoad(form: IViewEngineForm) {
    return true
  }
}