import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { EmmlibService } from '../../emmlib.service';

@Component({
  selector: 'emmlib-outlet',
  templateUrl: './outlet.component.html',
  animations: [
    trigger('loaderState', [
      state('in', style({
        opacity: 1
      })),
      state('out', style({
        opacity: 0.1
      })),
      transition('out => in', animate('500ms ease-in-out'))
    ])
  ]
})
export class OutletComponent implements OnInit {
  @ViewChild('viewChild', { read: ViewContainerRef })
  viewChild: ViewContainerRef;

  constructor(private core: EmmlibService) { }

  public get LoaderState(): string {
    return this.core.LoaderState;
  }

  ngOnInit() {
    this.core.Container = this.viewChild;
  }
}
