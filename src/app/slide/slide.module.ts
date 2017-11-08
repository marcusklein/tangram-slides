import { SlideComponent } from './slide.component';
import { NgModule } from '@angular/core';
import { TgGridModule } from '@trademe/tangram';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';

@NgModule({
  declarations: [
    SlideComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
  imports: [
    TgGridModule
  ],
  exports: [
    SlideComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent
  ],
})
export class SlideModule { }
