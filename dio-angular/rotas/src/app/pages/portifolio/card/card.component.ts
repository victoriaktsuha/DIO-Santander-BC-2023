import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(
    private parametrizador: ActivatedRoute,
    private navegador: Router
  ) {
    // Mostrar ":id" no console como objeto - id passado manualmente na URL
    // http://localhost:4200/portifolio/{1}
    this.parametrizador.params.subscribe((res) => console.log(res));

    // Mostrar parametros de busca do componente 'filho' no console como objeto - id/token passados manualmente na URL
    // http://localhost:4200/portifolio/1/abc
    this.parametrizador.firstChild?.params.subscribe((res) => console.log(res));

    // Mostrar parametros de busca "?name=bob&token=123" no console como objeto - parametros passados manualmente na URL
    // http://localhost:4200/portifolio/1?{name=bob&token=123}
    this.parametrizador.queryParams.subscribe((res) => console.log(res));
  }
  ngOnInit(): void {
    // após carregar, setInterval 'força' o carregamento da página Home (['/']) após 5 segundos
    /* setInterval(() => {
      this.navegador.navigate(['/']);
    }, 5000); */
  }
}
