import {
	Component,
	OnChanges,
	OnInit,
	SimpleChanges,
	Input,
} from '@angular/core';

@Component({
	selector: 'app-title',
	templateUrl: './title.component.html',
	styleUrls: ['./title.component.scss'],
})
export class TitleComponent implements OnInit, OnChanges {
	@Input() nome: string = '';
	constructor() {
		console.log(`Constructor ${this.nome} `);
	}

	ngOnChanges(changes: SimpleChanges): void {
		console.log(`OnChanges ${this.nome}`);
	}

	ngOnInit(): void {
		this.nome = this.nome + 'x';
		console.log(`OnInit ${this.nome}`);
		// console.log('Olá, eu sou o nascimento do Title Component');
		// this.nome = `Olá, ${this.nome}!`;
	}
}
