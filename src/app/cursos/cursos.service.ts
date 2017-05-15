import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {
  
  cursos: string[] = ['Java','Angular','Node.js'];

  constructor() { }

  getCursos(){
    return this.cursos;
  }


}
