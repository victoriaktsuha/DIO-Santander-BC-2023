import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-atributos',
  templateUrl: './comp-atributos.component.html',
  styleUrls: ['./comp-atributos.component.scss'],
})
export class CompAtributosComponent implements OnInit {
  // ngClass
  estilo: string = 'enable';

  // ngStyle
  corFundo: string = '#e9e9e9';
  corFonte: string = 'blue';

  //ngModel
  item: string = '';
  lista: string[] = [];

  //ngTemplate
  isEnable: boolean = true;

  constructor() {}

  // ngClass
  trocar() {
    if (this.estilo === 'disable') {
      this.estilo = 'enable';
    } else {
      this.estilo = 'disable';
    }
  }

  //ngModel
  adicionarLista() {
    this.lista.push(this.item);
  }
  ngOnInit(): void {}
}
