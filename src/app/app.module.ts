import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

//import Component
import { ButtonComponentModule } from './button-component/button-component.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonComponentModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
