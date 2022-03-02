import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import {FormsModule} from '@angular/forms';
import { MeuFormModule } from './meu-form/meu-form.module';
import { InputProperty2Component } from './input-property2/input-property2.component';



@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    InputProperty2Component,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MeuFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
