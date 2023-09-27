import { AfterContentInit, Component, ContentChildren, Input, OnInit, QueryList, ViewChild, signal } from '@angular/core';
import { CommonModule, NgOptimizedImage} from '@angular/common';
import { ViewContainerDirective } from '../../directives/view-container.directive';
import { TemplateRefDirective } from '../../directives/template-ref.directive';
import { Crew } from '../../models/crew.model';


@Component({
  selector: 'app-view-container',
  standalone: true,
  imports: [CommonModule, ViewContainerDirective, NgOptimizedImage],
  templateUrl: './view-container.component.html',
  styleUrls: ['./view-container.component.scss']
})
export class ViewContainerComponent implements AfterContentInit {

  @Input() crewsList:Crew[] = [];

  @ContentChildren(TemplateRefDirective) views!:QueryList<TemplateRefDirective>;

  @ViewChild(ViewContainerDirective, { static: true }) container!:ViewContainerDirective;

  indexPhoto = signal(0);

  ngAfterContentInit(): void {
   this.loadTemplate();
  }

  loadTemplate(index:number = 0){
    this.indexPhoto.set(index);
    const actualView = this.views.get(index)!;
    const viewContainer = this.container.viefContainerRef;
    viewContainer.clear();
    viewContainer.createEmbeddedView(actualView.templateRef);
  }

}












