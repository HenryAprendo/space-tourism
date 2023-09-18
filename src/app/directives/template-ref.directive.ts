import { Directive, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appTemplateRef]',
  standalone: true
})
export class TemplateRefDirective {

  constructor(public templateRef: TemplateRef<unknown>) { }

}
