import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AccessibilityInclusionComponent } from './accessibility-inclusion/accessibility-inclusion.component';

@NgModule({
  declarations: [
    AppComponent,
    AccessibilityInclusionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
