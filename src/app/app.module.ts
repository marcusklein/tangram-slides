import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Tangram:
import { TangramModule } from '@trademe/tangram';

import { AppComponent } from './app.component';
import { SlideComponent } from './slide/slide.component';
import { APP_IMPORTS } from './app.imports';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    ...APP_IMPORTS,
    BrowserModule,
    TangramModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
