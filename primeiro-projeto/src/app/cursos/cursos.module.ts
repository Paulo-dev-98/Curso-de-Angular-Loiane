import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { BrowserModule } from '@angular/platform-browser';
import { CursosService } from './cursos.service';




@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  imports: [
    CommonModule,
    BrowserModule
  ],
  exports:[
    CursosComponent
  ],
  providers:[
     CursosService
  ]



})
export class CursosModule { }
