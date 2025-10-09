import { computed, Directive, effect, ElementRef, inject, input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMarginBottom]'
})
export class MarginBottom {

  private readonly elementRef = inject(ElementRef);
  private readonly renderer2 = inject(Renderer2);
  applyMarginBottom = input('', { alias: 'appMarginBottom'});

  resolvedMarginBottom = computed(() => this.applyMarginBottom() || '24px') 

  constructor () {
    effect(() => {
      if(this.resolvedMarginBottom()){
        this.renderer2.setStyle(this.elementRef.nativeElement, 'margin-bottom', this.resolvedMarginBottom());
      }
    });
  }

}
