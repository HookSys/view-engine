import { Injectable } from '@angular/core';
import { IViewEngineFormInstance, IViewEngineForm } from './interfaces';
import { VIEW_ENGINE_FORM_NOTATION } from './decorators';

@Injectable()
export class ViewEngineFormService {
  private forms: IViewEngineFormInstance[] = [];

  register(Form: IViewEngineFormInstance) {
    this.forms.push(new Form());
  }

  fireOnBeforeLoad(form: IViewEngineForm): Promise<boolean> {
    return new Promise((resolve) => {
      this.forms.forEach((veForm) => {
        if (veForm[VIEW_ENGINE_FORM_NOTATION].code === form.code
        && typeof veForm.onBeforeLoad === 'function') {
          veForm.onBeforeLoad(form).then(resolve)
        }
      })
    })
  }

  unregister(form: IViewEngineFormInstance) {
    this.forms = this.forms.filter(iForm => {
        if (iForm[VIEW_ENGINE_FORM_NOTATION].code !== form[VIEW_ENGINE_FORM_NOTATION].code) {
            return iForm;
        }
    });
  }
}
