import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'life-cycle';
	// usando o 'OnDestroy', presente no TS do componente que será exibido, ao ser executado, ou seja, quando o componente deixa de existir, exibe uma mensagem no console. Nesse caso, o compoente foi 'destruido' através do *ngIf adicionado na tag e atrelado a uma propriedade booleana, onde *ngIf="false" deixa de exibir o componente que a recebe
	isAliveCheckSample: boolean = true;
	disposeCheckSample(): void {
		this.isAliveCheckSample = false;
	}
}
