import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() label: string = '';
  buttonText: string = 'Botão string regular';
  buttonTexts: string[] = ['Botão array string 0', 'Botão array string 1'];
  buttonNumber: number = 1;
  buttonObject = {
    label: 'Botão objeto > propriedade',
  };

  getAlert() {
    alert('Olá');
  }
  getAlertNum(num: number) {
    alert(num);
  }
  getAlertByHover() {
    alert(this.label);
  }
}
