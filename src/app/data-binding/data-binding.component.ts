import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = `http:/loiane.com`;
  vector: string[] = [`JAVA`,`Node.js`];
  urlImagem: string = `http://lorempixel.com/400/200/nature/`;

  constructor() { }
  
  getValor(){
    return this.vector;
  }
  getImagem(){
    return this.urlImagem;
  }

  ngOnInit() {
  }

}
