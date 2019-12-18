import { IViewEngineAction } from './ve.interface'
import { IViewEngineField } from './ve-section-field.interface'
import { IViewEngineForm } from './ve-form.interface'

export enum EViewEngineSectionType {
  FORM,
  GRID
}

export interface IViewEngineSectionCondition {
  section: number;
  field: string;
  value: any;
}

export interface IViewEngineSection {
  code: number;
  pk: string;
  type: EViewEngineSectionType;
  conditions: IViewEngineSectionCondition[];
  isReadOnly: boolean;
  action?: IViewEngineAction;
  order?: number;
  fields: IViewEngineField[];
}

export interface IViewEngineSectionHandler {
  onShow?(form: IViewEngineForm, section: IViewEngineSection): void
  onHide?(form: IViewEngineForm, section: IViewEngineSection): void
  onFieldChange?(form: IViewEngineForm, section: IViewEngineSection, field: IViewEngineField): void
}
