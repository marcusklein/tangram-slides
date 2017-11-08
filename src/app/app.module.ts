import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Tangram:
import { TangramModule, TgButtonsModule } from '@trademe/tangram';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TangramModule.forRoot(),
    TgButtonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
