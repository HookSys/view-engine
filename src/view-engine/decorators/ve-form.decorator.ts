import { IViewEngineFormHandler, IViewEngineFormDecorator } from 'view-engine/interfaces';

export const VIEW_ENGINE_FORM_NOTATION = '__VIEW_ENGINE_FORM__';

export function ViewEngineForm(args: IViewEngineFormDecorator): (cls: any) => any {
  return function (target: any) {
    Object.defineProperty(target.prototype, VIEW_ENGINE_FORM_NOTATION, {
      value: args
    });
  }
}