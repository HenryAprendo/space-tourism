import { AfterContentInit, Component, ContentChildren, OnInit, QueryList, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewContainerDirective } from '../../directives/view-container.directive';
import { TemplateRefDirective } from '../../directives/template-ref.directive';

@Component({
  selector: 'app-view-container',
  standalone: true,
  imports: [CommonModule, ViewContainerDirective],
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss']
})
export class ViewContainerComponent implements AfterContentInit {

  @ContentChildren(TemplateRefDirective) views!:QueryList<TemplateRefDirective>;

  @ViewChild(ViewContainerDirective, { static: true }) container!:ViewContainerDirective;

  index = 0;

  ngAfterContentInit(): void {
   this.loadTemplate();
  }

  loadTemplate(index:number = 0){
    const actualView = this.views.get(index)!;
    const viewContainer = this.container.viefContainerRef;
    viewContainer.clear();
    viewContainer.createEmbeddedView(actualView.templateRef);
  }

}












