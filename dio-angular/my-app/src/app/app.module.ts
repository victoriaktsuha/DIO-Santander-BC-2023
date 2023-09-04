import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from 'src/hello.component';
import { MenuComponent } from './components/menu.component';
import { ButtonComponent } from './components/button.component';
import { EntryDataComponent } from './components/entry-data.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    MenuComponent,
    ButtonComponent,
    EntryDataComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
