export interface IViewEngineSection {
  code: number
}

const VIEW_ENGINE_SECTION_NOTATION = '__VIEW_ENGINE_SECTION__';
export function ViewEngineSection(args: IViewEngineSection): (cls: any) => any {
  return function (target: any) {
    target[VIEW_ENGINE_SECTION_NOTATION] = {
      ...args
    }
  }
}