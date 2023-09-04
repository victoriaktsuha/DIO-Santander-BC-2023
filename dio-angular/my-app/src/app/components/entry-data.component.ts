import { Component, Input } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-entry-data',
  templateUrl: './entry-data.component.html',
  styleUrls: ['./entry-data.component.scss'],
})
export class EntryDataComponent {
  placeholder: string = 'email';
  placepass: string = 'senha';
  color: string = 'red';
  fontSize: string = '20px';
}
