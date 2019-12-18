export interface IViewEngineModal {
  code: number
}

const VIEW_ENGINE_MODAL_NOTATION = '__VIEW_ENGINE_MODAL__';
export function ViewEngineModal(args: IViewEngineModal): (cls: any) => any {
  return function (target: any) {
    target[VIEW_ENGINE_MODAL_NOTATION] = {
      ...args
    }
  }
}