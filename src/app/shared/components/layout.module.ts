import { NgModule } from '@angular/core';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { FooterComponent } from './footer/footer.component';

const components = [
  ToolBarComponent,
  FooterComponent
];

@NgModule({
  declarations: [],
  imports: [...components],
  exports: [...components],
  providers: [] //TODO: what is this?
})
export class LayoutModule { }
