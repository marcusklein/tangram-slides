// Imports
import { SlideModule } from './slide/slide.module';
import { TgButtonsModule, TgSvgModule, TgGridModule } from '@trademe/tangram';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

export const APP_IMPORTS = [
  SlideModule,
  // Tangram
  TgButtonsModule,
  TgSvgModule,
  TgGridModule,

  BrowserModule, BrowserAnimationsModule
];
