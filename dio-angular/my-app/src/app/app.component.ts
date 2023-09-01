import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  buttonLabel: string = 'String label do parent component';
  buttonFav: string = 'Adicionar ao favoritos';
}
