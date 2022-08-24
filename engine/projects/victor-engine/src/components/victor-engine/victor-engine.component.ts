import { Component, OnInit, ChangeDetectionStrategy, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector } from '@angular/core';

declare const __webpack_require__: {
  e: (chunId: any) => Promise<any>;
  [key: string]: any
};

declare const __webpack_modules__: any;

declare const __webpack_module_cache__: any;

@Component({
  selector: 'victor-engine',
  templateUrl: './victor-engine.component.html',
  styleUrls: ['./victor-engine.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VictorEngineComponent implements OnInit {

  @ViewChild('container', { read: ViewContainerRef, static: true })
  protected readonly container: ViewContainerRef;
  constructor(
    protected cfr: ComponentFactoryResolver
  ) { }

  async ngOnInit(): Promise<void> {
    // console.log(`window:`, window);
    // console.log(`engine init`, window['webpackChunktutorial']);

    // const fac = this.container.createComponent();
    // this.container.createComponent(fac,null,);

    // this.loadByWebpack();
    // const res = await VictorEngineComponent.loadScript('http://localhost:3000/market/my-card/my-card.umd.js');
    // console.log(`res:`, res);
    console.log(`window:`, window);
    // console.log(`my-card:`, window['my-card']);
  }

  private async loadByWebpack(): Promise<void> {
    // console.log(`__webpack_modules__:`, __webpack_modules__);
    console.log(`__webpack_require__:`, __webpack_require__);
    console.log(`__webpack_require__ fun:`, Object.keys(__webpack_require__));
    // console.log(`__webpack_module_cache__:`, __webpack_module_cache__);
    __webpack_require__.l('http://localhost:3000/market/dynamic-tabs/index.js', res => {
      // console.log(`res:`, res);
      // console.log(`__webpack_module_cache__:`, __webpack_module_cache__);
      // __webpack_require__.e(8307);
      console.log(`engine chunk`, window['webpackChunktutorial']);
      console.log(`__webpack_modules__:`, __webpack_modules__[8307]);

      console.log(`title:`, __webpack_require__.O());
      // __webpack_modules__[8307]();
    })


  }

  private async loadByScript(): Promise<void> {
    const ij = Injector.create({
      providers: [
        { provide: 'config', useValue: { name: 'robot' } }
      ]
    });
    const result = await VictorEngineComponent.loadScript('http://localhost:3000/market/dynamic-tabs/index.js');
    const chunks: Array<[[string], any]> = window['webpackChunktutorial'];
    const chunk = chunks.find(m => m[0][0] === 'dynamic-tabs');
    const detail = chunk[1][8307];
    // console.log(`result:`,result);
    console.log(`chunk:`, chunk);
    console.log(`chunk detail:`, detail);
    detail(8307);
  }

  static loadScript(FILE_URL, async = true, type = "text/javascript") {
    return new Promise((resolve, reject) => {
      try {
        const scriptEle = document.createElement("script");
        scriptEle.type = type;
        scriptEle.async = async;
        scriptEle.src = FILE_URL;

        scriptEle.addEventListener("load", (ev) => {
          resolve({ status: true });
        });

        scriptEle.addEventListener("error", (ev) => {
          reject({
            status: false,
            message: `Failed to load the script ${FILE_URL}`
          });
        });

        document.body.appendChild(scriptEle);
      } catch (error) {
        reject(error);
      }
    });
  };

}
