import { Component, Input, OnInit } from '@angular/core';
import { ViewEngineFormService } from 'view-engine/view-engine.service';
import { IViewEngineForm } from 'view-engine/interfaces';

@Component({
  selector: 've-form',
  templateUrl: './ve-form.component.html',
  styleUrls: ['./ve-form.component.scss']
})
export class ViewEngineFormComponent implements OnInit {
  @Input('form')
  public form: IViewEngineForm;
  public isVisible: boolean = false;

  constructor(private formService: ViewEngineFormService) {}

  ngOnInit() {
    this.formService.fireOnBeforeLoad(this.form).then((response) => {
      this.isVisible = response
    })
  }
}
