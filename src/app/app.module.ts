/*Prepara a aplicação para ser rodada em um browser*/
import { BrowserModule } from '@angular/platform-browser';
/*Decorator de módulo do angular*/
import { NgModule } from '@angular/core';
/*Data binding e formulários do angular*/
import { FormsModule } from '@angular/forms';
/*utilizado para requisições ajax*/
import { HttpModule } from '@angular/http';

/*Nossas classes*/
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { AppComponent } from './app.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';
import { CursosModule } from './cursos/cursos.module';

@NgModule({
  declarations: [ //lista todas as diretivas,pipes e outros módulos que queremos usar nesse projeto
    AppComponent,
    MeuPrimeiroComponent, 
    MeuPrimeiro2Component
  ],
  imports: [//outros módulos não nossos ou componentes que pertencem a outros módulos
    BrowserModule,
    FormsModule,
    HttpModule,
    CursosModule
  ],
  providers: [], //colocamos os serviços à serem usados pela app
  bootstrap: [AppComponent] //qual componente deve ser executado ao levantar a app
})
export class AppModule { }
