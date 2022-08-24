import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactory, ComponentFactoryResolver, Injector, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  @ViewChild('container', { static: true, read: ViewContainerRef })
  public readonly container: ViewContainerRef;
  public constructor(
    protected cfr: ComponentFactoryResolver,
    protected cdr: ChangeDetectorRef
  ) {

  }

  public ngOnInit(): void {
    // console.log(`webpackChunktutorial:`, window['webpackChunktutorial']);
  }

  async test(): Promise<void> {

  }


}
