import { IViewEngineAction } from './ve.interface';
import { IViewEngineSection } from './ve-section.interface';
import { VIEW_ENGINE_FORM_NOTATION } from 'view-engine/decorators';

export interface IViewEngineFormDecorator {
  code: number
}

export interface IViewEngineForm {
  code: number;
  action: IViewEngineAction;
  sections: IViewEngineSection[];
}

export interface IViewEngineFormHandler {
  onBeforeSave?(form: IViewEngineForm): Promise<boolean>;
  onAfterSave?(form: IViewEngineForm, response: any): void;
  onBeforeLoad?(form: IViewEngineForm): Promise<boolean>;
  onAfterLoad?(form: IViewEngineForm): void;
}

export interface IViewEngineFormInstance extends IViewEngineFormHandler {
  new ();
  [VIEW_ENGINE_FORM_NOTATION]: IViewEngineFormDecorator;
}
