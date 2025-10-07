import { Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMarginBottom]'
})
export class MarginBottom {

  private readonly elementRef = inject(ElementRef);
  private readonly renderer2 = inject(Renderer2);
  applyMarginBottom = input('', { transform: (value: string) => value || '24px', alias: 'appMarginBottom'});

  constructor () {
    effect(() => {
      if(this.applyMarginBottom()){
        this.renderer2.setStyle(this.elementRef.nativeElement, 'margin-bottom', this.applyMarginBottom());
      }
    });
  }

}
