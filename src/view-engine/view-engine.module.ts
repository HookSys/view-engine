import { APP_INITIALIZER } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ViewEngineFormService } from './view-engine.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { ViewEngineFormComponent } from './components/ve-form/ve-form.component';
import { IViewEngineFormInstance } from './interfaces';
import { ViewEngineComponent } from './engine/engine.component';

function InitViewEngine(forms: any = {}) {
  return function (formsService: ViewEngineFormService) {
    return () => {
      return new Promise((resolve) => {
        const formKeys = Object.keys(forms)
        formKeys.forEach((key: string, inx) => {
          if (key !== 'default') {
            const Form = forms[key] as IViewEngineFormInstance
            formsService.register(Form)
          }
          if (inx === formKeys.length - 1) {
            resolve()
          }
        })
      });
    };
  }
}

@NgModule({
  declarations: [
    ViewEngineComponent,
    ViewEngineFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    ViewEngineFormService
  ],
  exports: [
    ViewEngineComponent
  ]
})
export class ViewEngineModule {
  static forRoot(forms: any = {}): ModuleWithProviders{
    return {
      ngModule: ViewEngineModule,
      providers: [
        {
          provide: APP_INITIALIZER,
          useFactory: InitViewEngine(forms),
          multi: true,
          deps: [ViewEngineFormService],
        },
      ]
    }
  }
}