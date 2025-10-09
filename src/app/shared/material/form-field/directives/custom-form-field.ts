import { Directive } from '@angular/core';
import { FullWidth } from './full-width';
import { MarginBottom } from './margin-bottom';

@Directive({
  selector: 'mat-form-field',
  hostDirectives: [
    {
      directive: FullWidth,
      inputs: ['appFullWidth'],
    },
    {
      directive: MarginBottom,
      inputs: ['appMarginBottom: mb'],
    }
  ]
})
export class CustomFormField {}
