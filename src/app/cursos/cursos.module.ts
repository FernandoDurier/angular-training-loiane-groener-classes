import { NgModule } from '@angular/core';
/*o módulo de feature importa o CommonModule, pois o App.module já importa o NgModule*/
import { CommonModule } from '@angular/common';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursosService } from './cursos.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CursosComponent,
    CursoDetalheComponent
  ],
  exports: [
    CursosComponent
  ],//quais declarações desse módulo que queremos expor
  providers: [CursosService]
})
export class CursosModule { }
