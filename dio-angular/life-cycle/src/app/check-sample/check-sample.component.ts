import {
	Component,
	OnInit,
	DoCheck,
	AfterContentChecked,
	AfterContentInit,
	AfterViewChecked,
	AfterViewInit,
	OnDestroy,
} from '@angular/core';

@Component({
	selector: 'app-check-sample',
	templateUrl: './check-sample.component.html',
	styleUrls: ['./check-sample.component.scss'],
})
export class CheckSampleComponent
	implements
		OnInit,
		DoCheck,
		AfterContentChecked,
		AfterContentInit,
		AfterViewChecked,
		AfterViewInit,
		OnDestroy
{
	quantidade: number = 0;
	constructor() {}
	// ao executar as funções 'adicionar' e 'decrementar', alterando o componente, será executado 1-DoCheck (houve alteração), 2-AfterContentChecked (verifica o conteúdo modificado) e o 3-AfterViewChecked (atualiza a tela)
	adicionar() {
		this.quantidade += 1;
	}
	decrementar() {
		this.quantidade -= 1;
	}
	ngAfterContentChecked(): void {
		console.log('ngAfterContentChecked');
	}
	ngAfterContentInit(): void {
		console.log('ngAfterContentInit');
	}
	ngAfterViewChecked(): void {
		console.log('ngAfterViewChecked');
	}
	ngAfterViewInit(): void {
		console.log('ngAfterViewInit');
	}
	ngDoCheck(): void {
		console.log('ngDoCheck');
	}
	ngOnInit(): void {}

	ngOnDestroy(): void {
		console.log('Goodbye, my friend');
	}
}
