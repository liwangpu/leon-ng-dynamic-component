import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VictorEngineComponent } from './components/victor-engine/victor-engine.component';

@NgModule({
  declarations: [
    VictorEngineComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    VictorEngineComponent
  ]
})
export class VictorEngineModule { }
