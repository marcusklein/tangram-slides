import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Renderer2 } from '@angular/core';

// Tangram:
import { TangramModule } from '@trademe/tangram';

import { AppComponent } from './app.component';
import { APP_IMPORTS } from './app.imports';
import { MainComponent } from './main.component';
import { KeyboardService } from './services/keyboardEvent.service';
import { NavigationService } from './services/navigation.service';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    ...APP_IMPORTS,
    BrowserModule,
    TangramModule.forRoot(),
  ],
  providers: [ KeyboardService, NavigationService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
