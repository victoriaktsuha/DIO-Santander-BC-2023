import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  produtos: string[] = [];
  menuType: string = '';
  constructor() {
    this.produtos = ['mouse', 'teclado', 'cabo', 'fonte'];
  }
  adicionar() {
    this.produtos.push('produto');
  }
  remover() {
    this.produtos.pop();
  }
  getIndex(index: number) {
    alert(index);
  }
  // remove o item clicado, usando o index como referencia de 'start' e especifica que 1 será o número de itens removidos
  removerItem(index: number) {
    this.produtos.splice(index, 1);
  }
  ngOnInit(): void {}
}
