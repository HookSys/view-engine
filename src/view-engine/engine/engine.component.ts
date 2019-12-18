import { Component } from '@angular/core';
import { IViewEngineForm, EViewEngineSectionType, EViewEngineFieldType } from 'view-engine/interfaces';
@Component({
  selector: 'view-engine',
  templateUrl: './engine.component.html',
  styleUrls: ['./engine.component.scss']
})
export class ViewEngineComponent {
  public form: IViewEngineForm = {
    code: 1,
    action: {
      id: 'save',
      endpoint: '/test'
    },
    sections: [{
      code: 2,
      pk: 'field1',
      type: EViewEngineSectionType.FORM,
      isReadOnly: false,
      conditions: [{
        section: 2,
        field: 'tst',
        value: 1,
      }],
      fields: [{
        id: 'field1',
        type: EViewEngineFieldType.TEXT,
        position: 1,
        size: 4,
        isVisible: true,
        isReadOnly: false,
        defaultValue: '1',
        line: 1,
      }]
    }]
  }
}
